import { getState, CounterState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCounter from '../reducers/counter.reducer';

export const getCounterState = createSelector(
  fromFeature.getState,
  (state: fromFeature.CounterState) => state.counter
);

export const getCounter = createSelector(
  getCounterState,
  fromCounter.getCounter
);
