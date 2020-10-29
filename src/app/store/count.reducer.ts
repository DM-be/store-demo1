//import { CountActionTypes } from "./count.action";
import { CountAction, CountActionTypes } from "./count.action";
//import { initialCountState } from "./count.state";
import { CountState, initialState } from "./count.state";

//implement a reducer
// state = initial State
// action is a CountAction
// returns countstate

export function CountReducer(
  state: CountState = initialState,
  action: CountAction
): CountState {
  switch (action.type) {
    case CountActionTypes.INCREMENT_COUNT:
      let count = state.count;
      count++;
      return {
        count
      };

    default: {
      return state;
    }
  }
}
