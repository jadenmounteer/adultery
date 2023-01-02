import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Quote } from '../types/quote';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
  public defaultQuotes: Array<Quote> = [];
  public quotesChanged = new Subject<Quote[]>();

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  public fetchDefaultQuotes() {
    this.firestore
      .collection('defaultQuotes')
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      )
      .subscribe((quotes: Quote[]) => {
        this.defaultQuotes = quotes;
        this.quotesChanged.next([...this.defaultQuotes]);
      });
  }
}
