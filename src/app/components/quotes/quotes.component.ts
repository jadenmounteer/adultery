import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/types/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [
    trigger('quoteState', [
      state(
        'normal',
        style({
          'background-color': 'red',
        })
      ),
      state(
        'changing',
        style({
          'background-color': 'blue',
        })
      ),
    ]),
  ],
})
export class QuotesComponent implements OnInit {
  public quoteToDisplay: Quote | undefined;
  public defaultQuotes: Array<Quote> = [];
  public quotesLoaded: boolean = false;
  public quoteState = 'normal';

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.fetchDefaultQuotes().subscribe((responseData) => {
      this.defaultQuotes = responseData;
      this.defaultQuotes = this.shuffleQuotes(this.defaultQuotes);
      this.configureQuoteToDisplay();

      this.quotesLoaded = true;
    });
  }

  private configureQuoteToDisplay() {
    this.quoteToDisplay = this.defaultQuotes[0];

    setInterval(() => {
      this.quoteToDisplay = this.cycleThroughQuotes();
    }, 5000);
  }

  private cycleThroughQuotes(): Quote | undefined {
    let newQuote: Quote | undefined;
    if (this.quoteToDisplay) {
      let currentQuote: number = this.defaultQuotes.indexOf(
        this.quoteToDisplay
      );

      if (currentQuote <= this.defaultQuotes.length) {
        let newIndex = (currentQuote += 1);
        newQuote = this.defaultQuotes[newIndex];
      } else {
        newQuote = this.defaultQuotes[0];
      }
    }
    return newQuote;
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
