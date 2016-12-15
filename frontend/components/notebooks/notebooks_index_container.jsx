import { connect } from 'react-redux';
import { getNotebooks } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = (state, ownProps) => {
  const notebooksSorted = state.notebooks.notebooks.sort((a,b) => {
    let aDate = new Date(a.updated_at);
    let bDate = new Date(b.updated_at);
    return bDate - aDate;
  });
  return {
    notebooks: notebooksSorted,
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
