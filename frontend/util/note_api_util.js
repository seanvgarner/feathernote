export const getAllNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes'
  });
};

export const getOneNote = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  });
};

export const saveNewNote = (note) => {
  return $.ajax({
      method: 'POST',
      url: 'api/notes',
      data: { note }
  });
};

export const updateNote = (note) => {
  return $.ajax({
      method: 'PATCH',
      url: `api/notes/${note.id}`,
      data: { note }
  });
};
