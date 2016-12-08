import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import NoteIndexContainer from './notes/note_index_container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
  }

  logoutCurrentUser(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  redirect() {
    this.props.router.push("/");
  }

  // add note detail container after note index cont
  render() {
    const { children, currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="main">
          <SidebarContainer />
          <NoteIndexContainer />
          <h3>Hi, { currentUser.email }</h3>
          <button onClick={ this.logoutCurrentUser }>Logout</button>
          { children }
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}

export default App;
