import { connect } from 'react-redux';
import { getAllNotes, getOneNote } from '../../actions/note_actions';
import { sortedNotes } from '../../reducers/selectors';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
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
)(NoteIndex);
