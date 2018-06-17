import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';

import * as fromActions from '../actions/';
import * as fromServices from '../services';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store/reducers';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(
    private _actions$: Actions,
    private _service: fromServices.UserService,
    private _store: Store<fromStore.UserState>,
    private _router: Router
  ) { }

  @Effect()
  loadUser$: Observable<Action> = this._actions$
    .ofType(fromActions.LOAD_USER)
    .pipe(
      map((action: fromActions.LoadUser) => action),
      switchMap(() => {
        return this._service
          .load()
          .pipe(
            map(data => new fromActions.LoadUserSuccess(data)),
            catchError(error => of(new fromActions.LoadUserFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  loadUserFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.LOAD_USER_FAIL),
    tap(() => {
      console.error(`An error occurred while trying to load Users,
        please try again later.`);
    })
  );

  // Add user
  @Effect()
  addUser$: Observable<Action> = this._actions$
    .ofType(fromActions.ADD_USER)
    .pipe(
      map((action: fromActions.AddUser) => action.user),
      switchMap((user) => {
        return this._service
          .Add(user)
          .pipe(
            map(data => new fromActions.AddUserSuccess(data)),
            catchError(error => of(new fromActions.AddUserFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  addUserSuccess$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.ADD_USER_SUCCESS),
    tap((action: fromActions.AddUserSuccess) => {
      this._store.dispatch(new fromActions.LoadUser());
      this._router.navigate(['/user']);
    })
  );

  @Effect({ dispatch: false })
  addUserFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.ADD_USER_FAIL),
    tap((action: fromActions.AddUserFail) => {
      console.log(`An error occurred while trying to Add an user, please try again later.`);
    })
  );

  // Remove user
  @Effect()
  removeUser$: Observable<Action> = this._actions$
    .ofType(fromActions.REMOVE_USER)
    .pipe(
      map((action: fromActions.RemoveUser) => action.id),
      switchMap((id) => {
        return this._service
          .remove(id)
          .pipe(
            map((data) => new fromActions.RemoveUserSuccess(data)),
            catchError(error => of(new fromActions.RemoveUserFail(error)))
          );
      })
    );

  @Effect({ dispatch: false })
  removeUserSuccess$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.REMOVE_USER_SUCCESS),
    tap(() => {
      this._store.dispatch(new fromActions.LoadUser());
    })
  );

  @Effect({ dispatch: false })
  removeUserFail$: Observable<Action> = this._actions$.pipe(
    ofType(fromActions.REMOVE_USER_FAIL),
    tap(() => {
      console.error(`An error occurred while trying to remove an user, please try again later.`);
    })
  );
}
