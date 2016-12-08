import *  as APIUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";

export const receiveAllNotes = (notes) => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes
  };
};

export function getAllNotes() {
  return (dispatch) => {
    return APIUtil.getAllNotes().then(
      (notes) => dispatch(receiveAllNotes(notes))
    );
  };
}
