## Component Hierarchy

**AuthFormContainer**
 - sign in/ sign up

**HomeContainer**
 - Sidebar
 - Notes Container

**NotesContainer**
 - NotesHeader
  * NoteIndex
 - NoteBookHeader
  * NoteIndex
 - TagHeader
  * NoteIndex

**NoteIndex**
 - NoteIndexItem
  + NoteDetail
    * Notebook Selector
    + Rich Text Tools
    - Tags
      - Tag
    * Note

**MODALS:**
**NewNote**
 - NewNote
  - NewNoteButton

**NewNotebook**
 - NewNotebook

**NotebookSearch**
  + AutoSearch
  * AutoSearchResults
    * Notebooks

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

**NotesSearch**
  - Auto Search


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NoteDetail" |
| "React-Modal" | "NewNote" |
| "React-Modal" | "NewNotebook" |
| "React-Modal" | "NotebookSearch" |
| "React Modal" | "TagsSearch" |
| "React Modal" | "NotesSearch" |
