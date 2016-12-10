import { connect } from 'react-redux';
import { getAllNotes, getOneNote, switchNote } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import NoteIndex from './note_index';

const mapStateToProps = (state, ownProps) => {
  return {
    allNotes: state.notes,
    noteDetail: state.noteDetail,
    currentUser: state.session.currentUser,
    notes: sortedNotes(state.notes),
    currentNote: state.notes.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOneNote: (id) => dispatch(getOneNote(id)),
    switchNote: (note) => dispatch(switchNote(note)),
    getAllNotes: () => dispatch(getAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
