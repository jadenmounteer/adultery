import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../components/auth/auth.service';
import { FitnessLog } from '../types/exercise-log';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FitnessLogsService {
  public fitnessLogs: Array<FitnessLog> = [];
  public fitnessLogsChanged = new Subject<FitnessLog[]>();

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  public fetchLogs() {
    this.firestore
      .collection('fitnessLogs')
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          // Here we map the data coming from the db to be the FitnessLog type.
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              date: doc.payload.doc.data().date,
              text: doc.payload.doc.data().text,
              userId: doc.payload.doc.data().userId,
              parentId: doc.payload.doc.data().parentId,
            };
          });
        })
      )
      .subscribe((fitnessLogs: FitnessLog[]) => {
        const userId = this.authService.userId;
        this.fitnessLogs = fitnessLogs.filter((fitnessLog: FitnessLog) => {
          return fitnessLog.userId === userId;
        });
        this.fitnessLogsChanged.next([...this.fitnessLogs]);
      });
  }

  public addNewLog(newLog: FitnessLog) {
    const fitnessLogsRef = this.firestore.collection('fitnessLogs');
    fitnessLogsRef.add({ ...newLog });
  }
}
