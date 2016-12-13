import { connect } from 'react-redux';
import { signin, signup, clearError } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signup;

  return {
    clearError: () => dispatch(clearError()),
    processForm: (user) => dispatch(processForm(user)),
    formType: formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
