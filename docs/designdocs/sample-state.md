```js
{
  currentUser: {
    id: 1,
    email: "seangarner@sean.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
    createNotebook: {errors: ["Title can't be blank"]}
  },
  notes: {
    1: {
      title: "Title of A Note!",
      body: "all of the cool rich text",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "Special"
        }
      }
    }
  },
  notebooks: {
    1: {
      title: "Sample State",
      author_id: 1,
    }
  }
}
```
