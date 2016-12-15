import { combineReducers } from 'redux';

import { RECEIVE_LOGOUT } from '../actions/session_actions';

import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NoteDetailReducer from './note_detail_reducer';
import NotebooksReducer from './notebooks_reducer';
import TagsReducer from './tags_reducer';

const appReducer = combineReducers({
  tags: TagsReducer,
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  noteDetail: NoteDetailReducer,
  session: SessionReducer
});

export default (state, action) => {
  if (action.type === RECEIVE_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
