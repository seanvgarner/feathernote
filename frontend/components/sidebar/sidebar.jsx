import React from 'react';

class Sidebar extends React.Component {
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


  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div>
          <h4>I am the sidebar</h4>
          <button>New Note</button>
          <button>Search Note</button>
          <button>All Notes</button>
          <button>Note Books</button>
          <button>Tags</button>

          <h4>Hello, { this.props.currentUser.email }</h4>
          <button onClick={ this.logoutCurrentUser }>Logout</button>
        </div>
      );
    } else {
      return <div>logging out...</div>;
    }
  }
}

export default Sidebar;
