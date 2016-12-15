import { connect } from 'react-redux';
import { getTags } from '../../actions/tag_actions';
import TagsIndex from './tags_index';

const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.tags.tags,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTags: () => dispatch(getTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
