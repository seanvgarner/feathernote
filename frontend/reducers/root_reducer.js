import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';

const rootReducer = combineReducers({
  notes: NotesReducer,
  session: SessionReducer
});

export default rootReducer;
