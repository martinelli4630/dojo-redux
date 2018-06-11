import { Action } from '@ngrx/store';

export const INCREMENT  = '[Counter] Increment';
export const DECREMENT  = '[Counter] Decrement';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export type CounterActions =
  | Increment
  | Decrement;
