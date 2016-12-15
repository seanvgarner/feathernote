import { RECEIVE_TAGS, RECEIVE_TAG, SWITCH_TAG } from '../actions/tag_actions';

const _nullTags = Object.freeze({
  currentTag: null,
  tags: {}
});

const TagsReducer = ( state = _nullTags, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TAGS:
      const tags = action.tags;
      return Object.assign({}, state, { tags });
    case RECEIVE_TAG:
      const tagIds = state.tags.map(tag => (tag.id));
      let allTags;
      if (tagIds.includes(action.tag.id)) {
        allTags = state.tags.map(tag => (
        tag.id === action.tag.id ? action.tag : tag )
        );
      } else if (action.tag.id) {
        allTags = state.tags;
        allTags.unshift(action.tag);
      } else {
        allTags = state.tags;
      }
    return Object.assign({}, state, {tags: allTags });
    case SWITCH_TAG:
      let newTag = action.tag;
      return Object.assign({}, state, { currentTag: newTag });
    default:
      return state;
  }
};

export default TagsReducer;
