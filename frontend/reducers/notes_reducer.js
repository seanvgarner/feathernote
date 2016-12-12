import { RECEIVE_ALL_NOTES, SWITCH_NOTE, REMOVE_NOTE, RECEIVE_NOTE } from '../actions/note_actions';
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
      let notes = action.notes;
      return merge({}, state, { notes });
    case RECEIVE_NOTE:
      const newNote = action.note;
      newState = merge({}, state);
      newState.notes[newNote.id] = newNote;
      return newState;
    case SWITCH_NOTE:
      newState = merge({}, state);
      newState.currentNote = action.note;
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState.notes[action.note.id];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;

// let note = { [newNote.id]: newNote };
// return merge({}, state, { notes: note });
