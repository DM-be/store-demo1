import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

import { CountState } from '../store/count.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  // add count as an observable number


  //inject the store
  constructor() { }

  ngOnInit() {
   // subscribe to the count state 
  }

  public dispatchIncrement(): void {
    // dispatch an action that increments a counter
  }

}