import {AuthToken} from '../../_model/auth-token';
import {AuthenticationAction, AuthenticationActionTypes} from '../action/authentication.action';

const initialState: AuthToken = {
  username: '',
  accessToken: '',
  authorities: []
};

export function AuthenticationReducer(state: AuthToken = initialState, action: AuthenticationAction) {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_MEMBER:
      return action.payload;
    case AuthenticationActionTypes.LOGOUT_MEMBER:
      return state;
    default:
      return state;
  }
}
