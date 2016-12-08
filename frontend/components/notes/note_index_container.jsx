import { connect } from 'react-redux';
import { getAllNotes } from '../../actions/note_actions';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllNotes: () => dispatch(getAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
