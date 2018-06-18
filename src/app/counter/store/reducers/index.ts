import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';


export const getState = createFeatureSelector<any>('counter');
