import React from 'react';
import Modal from 'react-modal';
import NotebookIndexContainer from '../notebooks/notebooks_index_container';
import { NotebooksStyle } from '../modal_styles/notebooks_style';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notebooksModalOpen: false
    };

    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
    this.openNewNote = this.openNewNote.bind(this);
    this.toggleNotebooks = this.toggleNotebooks.bind(this);
    this.closeInitialModal = this.closeInitialModal.bind(this);
    this.toggleAllNotes = this.toggleAllNotes.bind(this);
  }

  logoutCurrentUser(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  openNewNote(e) {
    e.preventDefault();
    let newNotebook = this.props.notebooks[0].id;
    if (this.props.currentNotebook) {
      newNotebook = this.props.currentNotebook.id;
    }
    const dummyNote = { title: "Title your note", body: "", notebook_id: newNotebook};
    this.props.saveNewNote(dummyNote).then((response) => {
      this.props.switchNote(response.note);
    });
  }


  redirect() {
    this.props.router.push("/");
  }

  toggleNotebooks(e) {
    this.setState({ notebooksModalOpen: !this.state.notebooksModalOpen });
  }

  closeInitialModal() {
    this.setState({ notebooksModalOpen: false });
  }

  toggleAllNotes() {
    this.props.switchNotebook(null);
  }


  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <div className="sidebar">
          <div className="sb-containter group">
            <div className="main-logo-wrapper group">
              <img src={ window.featherLogo }></img>
            </div>
            <div onClick={ this.openNewNote } className="new-note-btn icon">
            </div>
            <div className="search-btn icon">
            </div>
            <div className="all-notes-btn icon" onClick={ this.toggleAllNotes }></div>
            <div className="notebooks-btn icon" onClick={ this.toggleNotebooks }></div>
            <div className="tags-btn icon"></div>
            <div className="logout-container">
              <div onClick={ this.logoutCurrentUser } className="logout icon"></div>
            </div>
          </div>
          <Modal
            style={ NotebooksStyle }
            isOpen={this.state.notebooksModalOpen}
            onRequestClose={ this.closeInitialModal }
            contentLabel="Modal">
            <NotebookIndexContainer closeInitialModal={ this.closeInitialModal }/>
          </Modal>
        </div>
      );
    } else {
      return <div>logging out...</div>;
    }
  }
}

export default Sidebar;
