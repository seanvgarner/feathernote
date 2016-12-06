
import { connect } from 'react-redux';
import WelcomeSplash from './welcome_splash';

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  null
)(WelcomeSplash);
