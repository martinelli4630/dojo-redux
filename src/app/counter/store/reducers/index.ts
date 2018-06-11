import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';

export interface CounterState {
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<CounterState> = {
  counter: fromCounter.reducer,
};

export const getState = createFeatureSelector<CounterState>('counter');
