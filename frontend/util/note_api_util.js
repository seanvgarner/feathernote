export const getAllNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes'
  });
};
