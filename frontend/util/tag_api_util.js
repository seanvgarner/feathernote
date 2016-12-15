export const getTags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/tags'
  });
};

export const addTag = (tag, note_id) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: { tag: { name: `${tag.name}`, note_id: `${note_id}` } }
  });
};

export const deleteTagging = (tag, note_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/taggings/${tag.id}`,
    data: { tag: { note_id: `${note_id}` }}
  });
};

export const deleteTag = (tag) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tags/${tag.id}`
  });
};
