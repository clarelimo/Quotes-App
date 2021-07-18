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
    new Quote("clare","Les Brown","Life Ha no limitations except the ones you make"),
    new Quote("clare","Mahatma Gandhi","Live as if you were to die tomorrow. Learn as if you were to live forever.")
  ];
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  
    this.quotes.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
