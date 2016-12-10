import { connect } from 'react-redux';
import { getOneNote, saveNewNote, switchNote, destroyNote } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import NoteIndexItem from './note_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    note: ownProps.note,
    notes: sortedNotes(state.notes),
    currentNote: state.notes.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    destroyNote: (note) => dispatch(destroyNote(note)),
    getOneNote: (id) => dispatch(getOneNote(id)),
    switchNote: (note) => dispatch(switchNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
