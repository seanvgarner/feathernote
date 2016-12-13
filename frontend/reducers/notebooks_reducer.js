import { RECEIVE_NOTEBOOKS, SWITCH_NOTEBOOK, REMOVE_NOTEBOOK, RECEIVE_NOTEBOOK } from '../actions/notebook_actions';
import merge from 'lodash/merge';

const _nullNotebooks = Object.freeze({
  currentNotebook: null,
  notebooks: [],
});

const NotebooksReducer = (state = _nullNotebooks, action ) => {
  let newState;
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      const notebooks = action.notebooks;
      return Object.assign({}, _nullNotebooks, { notebooks });
    case RECEIVE_NOTEBOOK:
      newState = Object.assign({}, state);
      const newNotebook = action.notebook;
      newState.notebooks.unshift(newNotebook);
      return newState;
    case SWITCH_NOTEBOOK:
      newState = Object.assign({}, state);
      newState.currentNotebook = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
    return Object.assign(
      {},
      state,
      { notebooks: state.notebooks.filter(notebook => notebook.id !== action.notebook.id)}
      );
    default:
      return state;
  }
};

export default NotebooksReducer;
