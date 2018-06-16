import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';

import * as fromActions from '../actions/';
import * as fromServices from '../services';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store/reducers';

@Injectable()
export class NoteEffects {

  constructor(
    private _actions$: Actions,
    private _service: fromServices.NoteService,
    private _store: Store<fromStore.NoteState>
  ) { }

  @Effect()
  loadNote$: Observable<Action> = this._actions$
    .ofType(fromActions.LOAD_NOTE)
    .pipe(
      map((action: fromActions.LoadNote) => action),
      switchMap(() => {
        return this._service
          .load()
          .pipe(
            map(data => new fromActions.LoadNoteSuccess(data)),
            catchError(error => of(new fromActions.LoadNoteFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  loadNoteFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.LOAD_NOTE_FAIL),
    tap(() => {
      console.error(`An error occurred while trying to load Notes,
        please try again later.`);
    })
  );

  // Add note
  @Effect()
  addNote$: Observable<Action> = this._actions$
    .ofType(fromActions.ADD_NOTE)
    .pipe(
      map((action: fromActions.AddNote) => action.note),
      switchMap((note) => {
        return this._service
          .Add(note)
          .pipe(
            map(data => new fromActions.AddNoteSuccess(data)),
            catchError(error => of(new fromActions.AddNoteFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  addNoteSuccess$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.ADD_NOTE_SUCCESS),
    tap((action: fromActions.AddNoteSuccess) => {
      this._store.dispatch(new fromActions.LoadNote());
    })
  );

  @Effect({ dispatch: false })
  addNoteFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.ADD_NOTE_FAIL),
    tap((action: fromActions.AddNoteFail) => {
      console.log(`An error occurred while trying to Add a Note, please try again later.`);
    })
  );

  // Remove note
  @Effect()
  removeNote$: Observable<Action> = this._actions$
    .ofType(fromActions.REMOVE_NOTE)
    .pipe(
      map((action: fromActions.RemoveNote) => action.note),
      switchMap((id) => {
        return this._service
          .remove(id)
          .pipe(
            map((data) => new fromActions.RemoveNoteSuccess(data)),
            catchError(error => of(new fromActions.RemoveNoteFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  removeNoteSuccess$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.REMOVE_NOTE_SUCCESS),
    tap(() => {
      this._store.dispatch(new fromActions.LoadNote());
    })
  );

  @Effect({ dispatch: false })
  removeNoteFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.REMOVE_NOTE_FAIL),
    tap(() => {
      console.error(`An error occurred while trying to remove Notes, please try again later.`);
    })
  );
}
