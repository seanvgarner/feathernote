import React from 'react';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      notebook_id: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ title: nextProps.noteDetail.title, body: nextProps.noteDetail.body });
  }

  handleSubmit(e) {
    e.preventDefault();

    let note = this.props.noteDetail;

    if (note.id) {
      note = Object.assign({}, this.state, { id: note.id });
      this.props.updateNote(note);
    } else {
      if (this.state.title) {
        note = Object.assign({}, this.state);
        this.props.saveNewNote(note);
      } else {

        note = Object.assign({}, this.state, { title: "Untitled Note"});
        this.props.saveNewNote(note);
      }
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h4>I am the Detail View</h4>
        <form onSubmit={ this.handleSubmit }>
          <input type="submit" value="Save"/>
          <h4>***Toolbar Coming Soon***</h4>
          <input type="text"
            value={this.state.title}
            onChange={ this.update("title")}
            placeholder="Title your note"/>
          <input type="textarea"
            value={this.state.body}
            onChange={ this.update("body")} placeholder="Just start typing..."></input>
        </form>
      </div>
    );
  }
}

export default NoteDetail;
