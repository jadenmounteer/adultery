import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  public quoteToDisplay: string = 'Do or do not, there is no try';
  public whoSaidIt: string = 'Yoda';

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.fetchDefaultQuotes();
  }
}
