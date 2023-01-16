import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'adultery';
  public user: User = {
    name: 'Jaden',
    isLoggedIn: true,
  };
  // items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    // This is a test, it will grab an empty list of all the default quotes collection
    // this.items = firestore.collection('defaultQuotes').valueChanges();
  }
}
