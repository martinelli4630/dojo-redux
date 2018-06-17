import { Action } from '@ngrx/store';

export const ADD_USER               = '[User] Add User';
export const ADD_USER_SUCCESS       = '[User] Add User Success';
export const ADD_USER_FAIL          = '[User] Add User Fail';

export const LOAD_USER              = '[User] Load User';
export const LOAD_USER_SUCCESS      = '[User] Load User Success';
export const LOAD_USER_FAIL         = '[User] Load User Fail';

export const REMOVE_USER            = '[User] Remove User';
export const REMOVE_USER_SUCCESS    = '[User] Remove User Success';
export const REMOVE_USER_FAIL       = '[User] Remove User Fail';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public user: any) {}
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: any) { }
}
export class AddUserFail implements Action {
  readonly type = ADD_USER_FAIL;

  constructor(public payload: any) { }
}

export class LoadUser implements Action {
  readonly type = LOAD_USER;
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor(public payload: any) { }
}
export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;

  constructor(public payload: any) { }
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public id: string) {}
}

export class RemoveUserSuccess implements Action {
  readonly type = REMOVE_USER_SUCCESS;

  constructor(public payload: any) {}
}
export class RemoveUserFail implements Action {
  readonly type = REMOVE_USER_FAIL;

  constructor(public payload: any) { }
}

export type UserActions =
  | AddUser
  | AddUserSuccess
  | AddUserFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | RemoveUser
  | RemoveUserSuccess
  | RemoveUserFail;
