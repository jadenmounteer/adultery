import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/types/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  public quoteToDisplay: string = '';
  public whoSaidIt: string = '';
  public defaultQuotes: Array<Quote> = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.fetchDefaultQuotes().subscribe((responseData) => {
      this.defaultQuotes = responseData;
      this.defaultQuotes = this.shuffleQuotes(this.defaultQuotes);
      this.configureQuoteToDisplay();
    });
  }

  private configureQuoteToDisplay() {
    // TODO cycle through the quotes
    this.quoteToDisplay = this.defaultQuotes[0].quoteToDisplay;
    this.whoSaidIt = this.defaultQuotes[0].whoSaidIt;
  }

  private shuffleQuotes(listOfQuotes: Array<Quote>): Array<Quote> {
    for (var i = listOfQuotes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = listOfQuotes[i];
      listOfQuotes[i] = listOfQuotes[j];
      listOfQuotes[j] = temp;
    }
    return listOfQuotes;
  }
}
