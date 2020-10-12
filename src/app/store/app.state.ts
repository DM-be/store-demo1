import { CountState } from "./count.state";


// our application state, containing only count state for now
export interface AppState {
  readonly countState: CountState
}