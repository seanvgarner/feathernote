import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebook_actions';
import { getAllNotes, updateNote } from '../../actions/note_actions';
import SelectNotebook from './select_notebook';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.notebooks.notebooks,
    currentNote: state.notes.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotebooks: () => dispatch(getNotebooks()),
    getAllNotes: () => dispatch(getAllNotes()),
    updateNote: (note) => dispatch(updateNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectNotebook);
