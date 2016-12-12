import { connect } from 'react-redux';
import { switchNotebook, createNotebook } from '../../actions/notebook_actions';
import AddNotebook from './add_notebook';

const mapStateToProps = (state) => {
  return {
    currentNotebook: state.notebooks.currentNotebook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchNotebook: (notebook) => dispatch(switchNotebook(notebook)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNotebook);
