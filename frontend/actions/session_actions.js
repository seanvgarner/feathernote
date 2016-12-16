import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveLogout = () => {
  return {
    type: RECEIVE_LOGOUT
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};

// thunk action creators
export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function signin(user) {
  return (dispatch) => {
    return APIUtil.signin(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(
      () => dispatch(receiveLogout()));
  };
}

export function updateUser(user, formData) {
  return (dispatch) => {
    return APIUtil.updateUser(user, formData).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser))
    );
  };
}
