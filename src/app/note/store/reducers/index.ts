import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromNote from './note.reducer';

export interface NoteState {
  note: fromNote.State;
}

export const reducers: ActionReducerMap<NoteState> = {
  note: fromNote.reducer,
};

export const getState = createFeatureSelector<NoteState>(
  'note'
);
