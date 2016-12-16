import { connect } from 'react-redux';
import { deleteTag, switchTag, getTags } from '../../actions/tag_actions';
import TagIndexItem from './tag_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTag: state.tags.currentTag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    switchTag: (tag) => dispatch(switchTag(tag)),
    getTags: () => dispatch(getTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndexItem);