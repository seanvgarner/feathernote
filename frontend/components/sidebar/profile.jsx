import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.closeProfileModal();
    this.props.logout();
  }


  render(){
    return(
      <div>
        <div className="logout-in-modal" onClick={ this.handleLogout }>Logout</div>
      </div>
    );
  }
}

export default Profile;
