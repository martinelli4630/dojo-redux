import { UserState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getState,
  (state: fromFeature.UserState) => state.user
);

export const getUsers = createSelector(
  getUserState,
  fromUser.getUsers
);
