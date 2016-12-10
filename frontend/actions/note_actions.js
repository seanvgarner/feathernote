import *  as APIUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const SWITCH_NOTE = "SWITCH_NOTE";

export const receiveAllNotes = (notes) => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes
  };
};

export const receiveNote = (note) => {
  return {
    type: RECEIVE_NOTE,
    note
  };
};

export const switchNote = (note) => {
  return  {
    type: SWITCH_NOTE,
    note
  };
};

export function getAllNotes() {
  return (dispatch) => {
    return APIUtil.getAllNotes().then(
      (notes) => dispatch(receiveAllNotes(notes))
    );
  };
}

export function getOneNote(id) {
  return (dispatch) => {
    return APIUtil.getOneNote(id).then(
      (note) => dispatch(receiveNote(note))
    );
  };
}

export function saveNewNote(newNote) {
  return (dispatch) => {
    return APIUtil.saveNewNote(newNote).then(
      (note) => dispatch(receiveNote(note))
    );
  };
}

export function updateNote(updatedNote) {
  return (dispatch) => {
    return APIUtil.updateNote(updatedNote).then(
      (note) => dispatch(receiveNote(note))
    );
  };
}
