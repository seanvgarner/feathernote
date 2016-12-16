export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};

export const signin = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const updateUser = (user, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData
  });
};
