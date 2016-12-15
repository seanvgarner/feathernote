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
    this.props.destroyNotebook(this.props.notebook);
    if (this.props.currentNotebook) {
      this.props.switchNotebook(null);
    }

    if (this.props.currentNote) {
      this.props.switchNote(null);
    }

    // this.props.getAllNotes().then(response => {
    //   let notes = response.notes;
    //   const notesArr = Object.keys(notes).map(key => notes[key]);
    //   if (notesArr.length > 0) {
    //     notesArr.forEach((note) => {
    //       if (note.notebook_id === this.props.notebook.id) {
    //         this.props.destroyNote(note);
    //       }
    //     });
    //   }
    // });
    this.props.closeDeleteModal();
  }

  render() {
    const { title } = this.props.notebook;

    return (
      <div className="delete-modal-wrapper group">
        <div className="delete-modal-dialogue group">
          <header className="delete-notebook-header">
            <div className="trash-can-for-modal"></div>
            <div className="modal-title">Delete Notebook</div>
            <div className="bottom-box"></div>
          </header>
          <div className="delete-notebook-prompt">Are you sure you want to delete <span>{ title }?</span></div>
          <div className="buttons-wrap group">
            <div className="cancel-delete-notebook-btn" onClick={ this.handleCancel }>
              Cancel
            </div>
            <div className="delete-notebook-btn" onClick={ this.handleNotebookDelete }>
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteNotebook;
