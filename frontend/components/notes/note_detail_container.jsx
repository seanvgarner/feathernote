import { connect } from 'react-redux';
import { getOneNote, saveNewNote, updateNote, switchNote } from '../../actions/note_actions';
import NoteDetail from './note_detail';

const mapStateToProps = (state) => {
  return {
    noteDetail: state.noteDetail,
    currentNote: state.notes.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
