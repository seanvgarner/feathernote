import { connect } from 'react-redux';
import { getOneNote, saveNewNote, updateNote } from '../../actions/note_actions';
import NoteDetail from './note_detail';

const mapStateToProps = (state) => {
  return {
    noteDetail: state.noteDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOneNote: (id) => dispatch(getOneNote(id)),
    saveNewNote: (note) => dispatch(saveNewNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
