#api-endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
  - For Notes index/search
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`
  - index of all notes for a particular notebook

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - if NOTE doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
