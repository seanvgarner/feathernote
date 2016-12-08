import { RECEIVE_ALL_NOTES } from '../actions/note_actions';
import { merge } from 'lodash';

const NotesReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      return merge({}, action.notes);
    default:
      return state;
  }
};

export default NotesReducer;
