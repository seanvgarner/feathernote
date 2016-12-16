import React from 'react';
import Modal from 'react-modal';
import NotebookIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';
import ProfileContainer from './profile_container';
import { NotebooksStyle } from '../modal_styles/notebooks_style';
import { ProfileStyle } from '../modal_styles/profile_style';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notebooksModalOpen: false,
      tagsModalOpen: false,
      profileModalOpen: false
    };

    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
    this.openNewNote = this.openNewNote.bind(this);
    this.toggleNotebooks = this.toggleNotebooks.bind(this);
    this.closeInitialModal = this.closeInitialModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);
    this.toggleAllNotes = this.toggleAllNotes.bind(this);
    this.toggleTags = this.toggleTags.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.closeProfileModal = this.closeProfileModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      if (this.props.notebooks.length !== nextProps.notebooks.length ) {
        this.props.getAllNotes();
      }
    }
  }

  logoutCurrentUser() {
    this.props.logout().then(() => this.redirect());
  }


  openNewNote(e) {
    e.preventDefault();
    let newNotebook = this.props.notebooks[0].id;
    if (this.props.currentNotebook) {
      newNotebook = this.props.currentNotebook.id;
    }
    const dummyNote = { title: "Title your note", body: "<p><br><p>", notebook_id: newNotebook};
    this.props.saveNewNote(dummyNote).then((response) => {
      this.props.switchNote(response.note);
    });
  }


  redirect() {
    this.props.router.push("/");
  }

  toggleProfile(e) {
    this.setState({ profileModalOpen: !this.state.profileModalOpen });
  }

  toggleNotebooks(e) {
    this.setState({ notebooksModalOpen: !this.state.notebooksModalOpen });
  }

  toggleTags(e) {
    this.setState({ tagsModalOpen: !this.state.tagsModalOpen });
  }

  closeInitialModal() {
    this.setState({ notebooksModalOpen: false });
  }

  closeTagsModal() {
    this.setState({ tagsModalOpen: false });
  }

  closeProfileModal() {
    this.setState({ profileModalOpen: false });
  }

  toggleAllNotes() {
    this.props.switchNotebook(null);
    this.props.switchTag(null);
    this.closeInitialModal();
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
            <div className="tags-btn icon" onClick={ this.toggleTags }></div>
            <div className="logout-container">
              <div className="profile-btn">
                <img src={currentUser.image_url} onClick={ this.toggleProfile } />
              </div>
            </div>
          </div>
          <Modal
            style={ NotebooksStyle }
            isOpen={this.state.notebooksModalOpen}
            onRequestClose={ this.closeInitialModal }
            contentLabel="Modal">
            <NotebookIndexContainer closeInitialModal={ this.closeInitialModal }/>
          </Modal>

          <Modal
            style={ NotebooksStyle }
            isOpen={this.state.tagsModalOpen }
            onRequestClose={ this.closeTagsModal }
            contentLabel="Modal">
            <TagsIndexContainer closeTagsModal={ this.closeTagsModal }/>
          </Modal>

          <Modal
            style={ ProfileStyle }
            isOpen={this.state.profileModalOpen}
            onRequestClose={ this.closeProfileModal}
            contentLabel="Modal">
            <ProfileContainer closeProfileModal={ this.closeTagsModal} currentUrl={ currentUser.image_url } logout={ this.logoutCurrentUser }/>
          </Modal>
        </div>
      );
    } else {
      return <div>logging out...</div>;
    }
  }
}

export default Sidebar;
