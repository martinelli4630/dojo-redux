import { Action } from '@ngrx/store';

export const ADD_NOTE               = '[Note] Add Note';
export const ADD_NOTE_SUCCESS       = '[Note] Add Note Success';
export const ADD_NOTE_FAIL          = '[Note] Add Note Fail';

export const LOAD_NOTE              = '[Note] Load Note';
export const LOAD_NOTE_SUCCESS      = '[Note] Load Note Success';
export const LOAD_NOTE_FAIL         = '[Note] Load Note Fail';

export const REMOVE_NOTE            = '[Note] Remove Note';
export const REMOVE_NOTE_SUCCESS    = '[Note] Remove Note Success';
export const REMOVE_NOTE_FAIL       = '[Note] Remove Note Fail';

export class AddNote implements Action {
  readonly type = ADD_NOTE;

  constructor(public note: any) {}
}

export class AddNoteSuccess implements Action {
  readonly type = ADD_NOTE_SUCCESS;

  constructor(public payload: any) { }
}
export class AddNoteFail implements Action {
  readonly type = ADD_NOTE_FAIL;

  constructor(public payload: any) { }
}

export class LoadNote implements Action {
  readonly type = LOAD_NOTE;
}

export class LoadNoteSuccess implements Action {
  readonly type = LOAD_NOTE_SUCCESS;

  constructor(public payload: any) { }
}
export class LoadNoteFail implements Action {
  readonly type = LOAD_NOTE_FAIL;

  constructor(public payload: any) { }
}

export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;

  constructor(public id: string) {}
}

export class RemoveNoteSuccess implements Action {
  readonly type = REMOVE_NOTE_SUCCESS;

  constructor(public payload: any) {}
}
export class RemoveNoteFail implements Action {
  readonly type = REMOVE_NOTE_FAIL;

  constructor(public payload: any) { }
}

export type NoteActions =
  | AddNote
  | AddNoteSuccess
  | AddNoteFail
  | LoadNote
  | LoadNoteSuccess
  | LoadNoteFail
  | RemoveNote
  | RemoveNoteSuccess
  | RemoveNoteFail;
