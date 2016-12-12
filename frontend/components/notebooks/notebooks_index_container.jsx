import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.notebooks.notebooks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotebooks: () => dispatch(getNotebooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
