import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuotesService {
  constructor(private http: HttpClient) {}

  public fetchDefaultQuotes() {
    return this.http
      .get('https://tubular-cccbd-default-rtdb.firebaseio.com/0.json')
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
