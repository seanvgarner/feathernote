import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getAllNotes } from '../../actions/note_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => {
  return {
    router: ownProps.router,
    currentUser: state.session.currentUser,
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    getAllNotes: () => dispatch(getAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
