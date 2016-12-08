import { connect } from 'react-redux';
import { getOneNote, saveNewNote } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import NoteIndexItem from './note_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    note: ownProps.note,
    notes: sortedNotes(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOneNote: (id) => dispatch(getOneNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
