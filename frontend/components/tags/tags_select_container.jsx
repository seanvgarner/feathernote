import { connect } from 'react-redux';
import { addTag, getTags, deleteTagging } from '../../actions/tag_actions';
import { getOneNote } from '../../actions/note_actions';
import TagsSelect from './tags_select';

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.notes.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTag: (tag, note_id) => dispatch(addTag(tag, note_id)),
    getTags: () => dispatch(getTags()),
    deleteTagging: (tag, note_id) => dispatch(deleteTagging(tag, note_id)),
    getOneNote: (id) => dispatch(getOneNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsSelect);
