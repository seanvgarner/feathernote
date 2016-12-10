import { RECEIVE_ALL_NOTES, SWITCH_NOTE } from '../actions/note_actions';
import { merge } from 'lodash';

const _nullNotes = Object.freeze({
  currentNote: null,
  notes: {}
});

const NotesReducer = (state = _nullNotes, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_NOTES:
    const notes = action.notes;
      return merge({}, state, { notes });
    case SWITCH_NOTE:
      newState = merge({}, state);
      newState.currentNote = action.note;
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
