import { connect } from 'react-redux';
import { switchNotebook, destroyNotebook } from '../../actions/notebook_actions';
import { destroyNote, switchNote, getAllNotes } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import DeleteNotebook from './delete_notebook';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentNotebook: state.notebooks.currentNotebook,
    currentNote: state.notes.currentNote,
    notes: sortedNotes(state.notes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllNotes: () => dispatch(getAllNotes()),
    switchNote: (note) => dispatch(switchNote(note)),
    switchNotebook: (notebook) => dispatch(switchNotebook(notebook)),
    destroyNote: (note) => dispatch(destroyNote(note)),
    destroyNotebook: (notebook) => dispatch(destroyNotebook(notebook))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNotebook);
