import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
    this.openNewNote = this.openNewNote.bind(this);
  }

  logoutCurrentUser(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  openNewNote(e) {
    e.preventDefault();
    const dummyNote = { title: "", body: "", notebook_id: 1 };
    this.props.switchNote(dummyNote);
  }


  redirect() {
    this.props.router.push("/");
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
            <div className="all-notes-btn icon"></div>
            <div className="notebooks-btn icon"></div>
            <div className="tags-btn icon"></div>
            <div className="logout-container">
              <div onClick={ this.logoutCurrentUser } className="logout icon"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>logging out...</div>;
    }
  }
}

export default Sidebar;
