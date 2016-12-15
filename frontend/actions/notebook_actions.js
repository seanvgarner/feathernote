import * as APIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const SWITCH_NOTEBOOK = 'SWITCH_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';

export const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const receiveNotebook = (notebook) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  };
};

export const switchNotebook = (notebook) => {
  return {
    type: SWITCH_NOTEBOOK,
    notebook
  };
};

export const removeNotebook = (notebook) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebook
  };
};


export function getNotebooks() {
  return (dispatch) => {
    return APIUtil.getNotebooks().then(
      (notebooks) => dispatch(receiveNotebooks(notebooks))
    );
  };
}

export function destroyNotebook(notebookToDestroy) {
  return (dispatch) => {
    return APIUtil.destroyNotebook(notebookToDestroy).then(
      (notebooks) => dispatch(receiveNotebooks(notebooks))
    );
  };
}

export function createNotebook(notebookToCreate) {
  return (dispatch) => {
    return APIUtil.createNotebook(notebookToCreate).then(
      (notebook) => dispatch(receiveNotebook(notebook))
    );
  };
}
