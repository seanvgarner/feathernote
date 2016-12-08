import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NoteDetailReducer from './note_detail_reducer';

const rootReducer = combineReducers({
  noteDetail: NoteDetailReducer,
  notes: NotesReducer,
  session: SessionReducer
});

export default rootReducer;
