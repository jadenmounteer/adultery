import { Injectable } from '@angular/core';
import { Quote } from '../types/quote';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
  public defaultQuotes: Array<Quote> = [];
  public quotesChanged = new Subject<Quote[]>();

  constructor(private firestore: AngularFirestore) {}

  public fetchDefaultQuotes() {
    this.firestore
      .collection('defaultQuotes')
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          // Here we map the data coming from the db to be the Quote type.
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
