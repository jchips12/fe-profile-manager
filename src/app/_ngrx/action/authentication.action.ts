import {Action} from '@ngrx/store';
import {AuthToken} from '../../_model/auth-token';

export enum AuthenticationActionTypes {
  LOGIN_MEMBER = '[AUTHENTICATION] Login',
  LOGOUT_MEMBER = '[AUTHENTICATION] Logout'
}

export class LoginMemberAction implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_MEMBER;
  constructor(public payload: AuthToken) {
  }
}

export class LogoutMemberAction implements Action {
  readonly type = AuthenticationActionTypes.LOGOUT_MEMBER;
  constructor() {
  }
}

export type AuthenticationAction = LoginMemberAction | LogoutMemberAction;
