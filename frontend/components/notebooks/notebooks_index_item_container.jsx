import { connect } from 'react-redux';
import { switchNotebook } from '../../actions/notebook_actions';
import { switchNote } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import NotebooksIndexItem from './notebooks_index_item';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    notes: sortedNotes(state.notes),
    notebooks: state.notebooks.notebooks,
    currentNotebook: state.notebooks.currentNotebook
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchNotebook: (notebook) => dispatch(switchNotebook(notebook)),
    switchNote: (note) => dispatch(switchNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndexItem);
