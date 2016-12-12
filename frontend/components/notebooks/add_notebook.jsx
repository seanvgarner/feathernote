import React from 'react';

class AddNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleCreateNotebook = this.handleCreateNotebook.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  handleCreateNotebook() {
    if (this.state.title.length > 0) {
      this.props.createNotebook(this.state).then(response => {
        this.props.switchNotebook(response.notebook);
      });
      this.props.closeAddModal();
      this.props.closeInitialModal();
    }
  }

  handleCancel() {
    this.props.closeAddModal();
  }

  render() {
    let createClass = "create-notebook-btn";
    if (this.state.title.length === 0) {
      createClass += " disabled";
    }
    return(
      <div>
        <input type="text"
          value={this.state.title}
          onChange={ this.update("title")}
          placeholder="Title your notebook"/>
        <div className="cancel-create-notebook-btn" onClick={ this.handleCancel }>
          Cancel
        </div>
        <div className={ createClass } onClick={ this.handleCreateNotebook }>
          Create Notebook
        </div>
      </div>
    );
  }

}

export default AddNotebook;
