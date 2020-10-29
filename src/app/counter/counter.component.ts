import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../store/app.state";
import { IncrementCountAction } from "../store/count.action";

import { CountState } from "../store/count.state";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  // add count as an observable number
  public count$: Observable<number>;

  //inject the store
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // subscribe to the count state
    this.count$ = this.store.select(state => state.countState.count);
  }

  public dispatchIncrement(): void {
    // dispatch an action that increments a counter
    this.store.dispatch(new IncrementCountAction());
  }
}
