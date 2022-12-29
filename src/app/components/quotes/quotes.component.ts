import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  public quoteToDisplay: string = 'Do or do not, there is no try';
  public whoSaidIt: string = 'Yoda';

  constructor() {}

  ngOnInit(): void {
    // TODO Grab the quotes from the quote service
  }
}
