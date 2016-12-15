import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllNotes } from '../actions/note_actions';
import { getNotebooks } from '../actions/notebook_actions';
import { getTags } from '../actions/tag_actions';
import App from './app';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    notebooks: state.notebooks.notebooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    getAllNotes: () => dispatch(getAllNotes()),
    getNotebooks: () => dispatch(getNotebooks()),
    getTags: () => dispatch(getTags())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
