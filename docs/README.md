# FEATHERNOTE

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://feathernotes.herokuapp.com/#/signin
[trello]: https://trello.com/b/5uNs3aSS/feathernote

## Minimum Viable Product

FEATHERNOTE is a web app inspired by Evernote built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Hosting on Heroku
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich-text Editing
**Bonus Features**:
- [ ] Auto Save
- [ ] Reminders
- [ ] Searches


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: designdocs/wireframes
[components]: designdocs/component-hierarchy.md
[sample-state]: designdocs/sample-state.md
[api-endpoints]: designdocs/api-endpoints.md
[schema]: designdocs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End Authentication (2 days)

**Objective:** Functioning rails project with front-end User Authentication (including demo log in)

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through the API.

### Phase 3: Notebooks (2 days)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (2 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Rich-text editing in Notes (2 days)

**objective:** Allow rich text editing of notes (probably using the quill library).


### Bonus Features (TBD)
- [ ] Auto save notes
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Share Note? (via email, social media)
