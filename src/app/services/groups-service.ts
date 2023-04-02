import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Group } from '../types/group';
import { AuthService } from '../components/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class GroupService {
  public groups: Array<Group> = [];
  public groupsChanged = new Subject<Group[]>();

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  public async fetchGroups() {
    // Set user object
    this.authService.user$.subscribe((user) => {
      this.firestore
        .collection('groups', (ref) => ref.where('users', 'in', user))
        .snapshotChanges()
        .pipe(
          map((docArray: any[]) => {
            // Here we map the data coming from the db to be the Quote type.
            return docArray.map((doc) => {
              if (!doc.payload.doc.data().id) {
                this.addPayloadIdToGroup(doc.payload.doc.id);
              }
              return {
                id: doc.payload.doc.id,
                groupName: doc.payload.doc.data().groupName,
                users: doc.payload.doc.data().users,
              };
            });
          })
        )
        .subscribe((groups: Group[]) => {
          this.groups = groups;
          this.groupsChanged.next([...this.groups]);
        });
    });
  }

  public addNewGroup(newGroup: Group) {
    const shoppingListRef = this.firestore.collection('groups');
    shoppingListRef.add({ ...newGroup });
  }

  private addPayloadIdToGroup(payloadId: string): void {
    const shoppingListRef = this.firestore.collection('groups');

    shoppingListRef.doc(payloadId).update({
      id: payloadId,
    });
  }
}
