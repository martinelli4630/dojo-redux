import { NoteState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromNote from '../reducers/note.reducer';

export const getNoteState = createSelector(
  fromFeature.getState,
  (state: fromFeature.NoteState) => state.note
);

export const getNotes = createSelector(
  getNoteState,
  fromNote.getNotes
);
