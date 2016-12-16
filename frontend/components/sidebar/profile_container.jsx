import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user, formData) => dispatch(updateUser(user, formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
