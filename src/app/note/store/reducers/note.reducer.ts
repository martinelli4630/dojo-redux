import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import * as fromActions from '../actions/note.action';

export interface State {
  notes: any;
}

export const initialState: State = {
  notes: []
};

export function reducer(
  state = initialState,
  action: fromActions.NoteActions
): State {
  switch (action.type) {

    case fromActions.LOAD_NOTE_SUCCESS: {
      return {
        ...state,
        notes: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getNotes = (state: State) => state.notes;
