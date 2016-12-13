import { RECEIVE_NOTE, RECEIVE_NEW_NOTE } from '../actions/note_actions';
import { merge } from 'lodash';

const _defaultNote = {
  title: '',
  body: '',
};

const NoteDetailReducer = (state = _defaultNote, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE:
    case RECEIVE_NEW_NOTE:
      return Object.assign({}, action.note);
    default:
      return state;
  }
};

export default NoteDetailReducer;
