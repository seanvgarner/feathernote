import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const SWITCH_TAG = "SWITCH_TAG";

export const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const receiveTag = (tag) => {
  return {
    type: RECEIVE_TAG,
    tag
  };
};

export const switchTag = (tag) => {
  return {
    type: SWITCH_TAG,
    tag
  };
};

export function getTags() {
  return (dispatch) => {
    return APIUtil.getTags().then(
      (tags) => dispatch(receiveTags(tags))
    );
  };
}

export function addTag(tag, note_id) {
  return (dispatch) => {
    return APIUtil.addTag(tag, note_id).then(
      (newTag) => dispatch(receiveTag(newTag))
    );
  };
}

export function deleteTagging(tag, note_id) {
  return (dispatch) => {
    return APIUtil.deleteTagging(tag, note_id);
  };
}

export function deleteTag(tag) {
  return (dispatch) => {
    return APIUtil.deleteTag(tag).then(
      (tags) => dispatch(receiveTags(tags))
    );
  };
}
