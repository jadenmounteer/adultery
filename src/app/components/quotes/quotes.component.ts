import {
  state,
  style,
  transition,
  trigger,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/types/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [
    trigger('quoteState', [
      state('invisible', style({})),
      state('normal', style({})),
      transition(
        'normal => invisible',
        animate(
          500,
          keyframes([
            style({
              opacity: 1,
            }),
            style({
              opacity: 0,
            }),
          ])
        )
      ),
      transition(
        'invisible => normal',
        animate(
          500,
          keyframes([
            style({
              opacity: 0,
            }),
            style({
              opacity: 1,
            }),
          ])
        )
      ),
    ]),
    trigger('fadeIn', [
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(500),
      ]),
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
      this.fadeOut();
      setTimeout(() => {
        // this.onAnimate();
        this.quoteToDisplay = this.cycleThroughQuotes();
        this.fadeIn();
      }, 490);
    }, 15000);
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

  private onAnimate() {
    this.quoteState == 'normal'
      ? (this.quoteState = 'invisible')
      : (this.quoteState = 'normal');
  }

  private fadeOut() {
    this.quoteState = 'invisible';
  }

  private fadeIn() {
    this.quoteState = 'normal';
  }
}
