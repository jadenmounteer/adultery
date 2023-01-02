import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Quote } from '../types/quote';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class QuotesService {
  defaultQuotes: Observable<any> | undefined;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  public fetchDefaultQuotes() {
    // return this.http.get<Quote[]>(
    //   'https://tubular-cccbd-default-rtdb.firebaseio.com/0.json'
    // );

    return this.firestore.collection('defaultQuotes').snapshotChanges();
  }
}
