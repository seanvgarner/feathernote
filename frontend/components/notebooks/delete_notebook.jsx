import React from 'react';

class DeleteNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleNotebookDelete = this.handleNotebookDelete.bind(this);
  }

  handleCancel(e) {
    this.props.closeDeleteModal();
  }

  handleNotebookDelete(e) {
    if (this.props.currentNotebook) {
      this.props.switchNotebook(null);
    }

    if (this.props.currentNote) {
      this.props.switchNote(null);
    }

    this.props.getAllNotes().then(response => {
      let notes = response.notes;
      const notesArr = Object.keys(notes).map(key => notes[key]);
      if (notesArr.length > 0) {
        notesArr.forEach((note) => {
          if (note.notebook_id === this.props.notebook.id) {
            this.props.destroyNote(note);
          }
        });
      }
    });

    this.props.destroyNotebook(this.props.notebook);
    this.props.switchNotebook(null);
    this.props.closeDeleteModal();
  }

  render() {
    return (
      <div>
        DeleteModal
        <div className="cancel-delete-notebook-btn" onClick={ this.handleCancel }>
          Cancel
        </div>
        <div className="delete-notebook-btn" onClick={ this.handleNotebookDelete }>
          Delete Notebook
        </div>
      </div>
    );
  }
}

export default DeleteNotebook;
