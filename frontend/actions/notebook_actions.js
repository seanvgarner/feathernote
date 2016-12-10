import * as APIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';

export const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};


export function getNotebooks() {
  return (dispatch) => {
    return APIUtil.getNotebooks().then(
      (notebooks) => dispatch(receiveNotebooks(notebooks))
    );
  };
}
