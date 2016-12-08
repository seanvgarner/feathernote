import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllNotes } from '../actions/note_actions';
import App from './app';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
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
)(App);
