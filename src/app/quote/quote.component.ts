import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("clare","Dad","Ker Kosir Serung'ung!"),
    new Quote("clare","Les Brown","Life Ha no limitations except the ones you make")
  ];
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
