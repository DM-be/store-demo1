import { Action } from "@ngrx/store";

export enum CountActionTypes {
  INCREMENT_COUNT = "[count] increment"
}
// create an enum with action types

export class IncrementCountAction implements Action {
  type = CountActionTypes.INCREMENT_COUNT;
}

// export a class implementing an action

// export CountAction type

export type CountAction = IncrementCountAction;
