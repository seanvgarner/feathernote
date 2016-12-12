export const getNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notebooks'
  });
};

export const createNotebook = (notebook) => {
  return $.ajax({
    method: 'POST',
    url: 'api/notebooks',
    data: { notebook }
  });
};

export const destroyNotebook = (notebook) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebook.id}`
  });
};
