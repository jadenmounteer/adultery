import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../types/quote';

@Injectable()
export class QuotesService {
  constructor(private http: HttpClient) {}

  public fetchDefaultQuotes() {
    return this.http.get<Quote[]>(
      'https://tubular-cccbd-default-rtdb.firebaseio.com/0.json'
    );
  }
}
