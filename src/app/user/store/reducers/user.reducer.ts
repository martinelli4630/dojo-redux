import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import * as fromActions from '../actions/user.action';

export interface State {
  users: any;
}

export const initialState: State = {
  users: []
};

export function reducer(
  state = initialState,
  action: fromActions.UserActions
): State {
  switch (action.type) {

    case fromActions.LOAD_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getUsers = (state: State) => state.users;
