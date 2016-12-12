import { connect } from 'react-redux';
import { getOneNote, saveNewNote, updateNote, switchNote } from '../../actions/note_actions';
import {sortedNotes } from '../../reducers/selectors';
import { getNotebooks } from '../../actions/notebook_actions';
import NoteDetail from './note_detail';

const mapStateToProps = (state) => {
  return {
    notes: sortedNotes(state.notes),
    noteDetail: state.noteDetail,
    currentNote: state.notes.currentNote,
    notebooks: state.notebooks.notebooks,
    currentNotebook: state.notebooks.currentNotebook
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotebooks: () => dispatch(getNotebooks()),
    switchNote: (note) => dispatch(switchNote(note)),
    getOneNote: (id) => dispatch(getOneNote(id)),
    saveNewNote: (note) => dispatch(saveNewNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
