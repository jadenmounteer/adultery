import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/types/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  public quoteToDisplay: string = 'Do or do not, there is no try';
  public whoSaidIt: string = 'Yoda';
  public defaultQuotes: Array<Quote> = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.fetchDefaultQuotes().subscribe((responseData) => {
      this.defaultQuotes = responseData;
      this.configureQuoteToDisplay();
    });
  }

  private configureQuoteToDisplay() {
    let randomQuote: Quote = this.getRandomQuote(this.defaultQuotes);
  }

  private getRandomQuote(listOfQuotes: Array<Quote>): Quote {
    return listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
  }
}
