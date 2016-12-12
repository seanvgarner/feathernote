import React from 'react';
import Modal from 'react-modal';
import { FullscreenStyle } from '../modal_styles/fullscreen_style';
import DeleteNotebookContainer from './delete_notebook_container';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false
    };

    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  handleSelectNotebook() {
    this.props.switchNotebook(this.props.notebook);
    this.props.closeInitialModal();
  }

  toggleDeleteModal(e) {
    e.stopPropagation();
    if (this.props.notebooks.length > 1) {
      this.setState({ deleteModalOpen: !this.state.deleteModalOpen });
    }
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  render() {
    let canRemove = "delete-notebook-trash-can";
    if (this.props.notebooks.length <= 1) {
      canRemove += "-disabled";
    }

    const { title } = this.props.notebook;
    const thisNotebooksNotes = this.props.notes.filter(note => note.notebook_id === this.props.notebook.id );
    const noteCount = thisNotebooksNotes.length;

    return (
      <li onClick={ this.handleSelectNotebook }>
        <div className="notebook-title">
          { title }
        </div>
        <div className="notebook-note-count">
          { noteCount } Notes
        </div>
        <div className={ canRemove } onClick={ this.toggleDeleteModal }>
          Delete
        </div>
        <Modal
          style={ FullscreenStyle }
          isOpen={ this.state.deleteModalOpen }
          onRequestClose={ this.closeDeleteModal}
          contentLabel="Modal">
          <DeleteNotebookContainer
            closeDeleteModal={ this.closeDeleteModal } notebook={ this.props.notebook }/>
        </Modal>
      </li>
    );
  }
}

export default NotebooksIndexItem;
