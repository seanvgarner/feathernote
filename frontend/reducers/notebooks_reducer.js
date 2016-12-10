import { RECEIVE_NOTEBOOKS } from '../actions/notebook_actions';
import merge from 'lodash/merge';

const _nullNotebooks = Object.freeze({
  currentNotebook: null,
  notebooks: [],
});

const NotebooksReducer = (state = _nullNotebooks, action ) => {
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      const notebooks = action.notebooks;
      return merge({}, _nullNotebooks, { notebooks });
    default:
      return state;
  }
};

export default NotebooksReducer;
