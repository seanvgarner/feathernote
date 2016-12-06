import React from 'react';

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

  render() {
    const { children, currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
          <h1>MAIN APP!!!</h1>
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
