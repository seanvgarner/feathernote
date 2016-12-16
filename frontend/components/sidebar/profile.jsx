import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.currentUrl,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogout(e) {
    this.props.closeProfileModal();
    this.props.logout();
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    if (this.state.imageFile) {
      const formData = new FormData();
      formData.append("user[avatar]", this.state.imageFile);
      this.props.updateUser(this.props.currentUser, formData);
    }
  }


  render(){
    return(
      <div className="profile-view-wrapper">
        <div className="avatar-preview">
          <img src={ this.state.imageUrl } />
        </div>
        <div className="profile-btns-wrapper group">
        <div className="submit-avatar" onClick={ this.handleSubmit }>Update Avatar</div>
        <label className="choose-file-button">Choose File
          <input type="file" onChange={ this.updateFile }></input>
        </label>
        </div>
        <div className="logout-in-modal" onClick={ this.handleLogout }>Logout</div>
      </div>
    );
  }
}

export default Profile;
