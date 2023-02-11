import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'adultery';
  // items: Observable<any[]>;

  constructor(firestore: AngularFirestore, private authService: AuthService) {
    // This is a test, it will grab an empty list of all the default quotes collection
    // this.items = firestore.collection('defaultQuotes').valueChanges();
  }

  ngOnInit(): void {
    this.authService.iniAuthListener();
  }
}
