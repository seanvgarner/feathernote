import React from 'react';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentNote || {
      title: "",
      body: "",
      notebook_id: 1,
      id: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentNote) {
      if (nextProps.currentNote.id !== this.state.id) {

        this.setState(nextProps.currentNote);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentNote) {
      const prevTitle = this.props.currentNote.title;
      const prevBody = this.props.currentNote.body;
      const newTitle = this.state.title;
      const newBody = this.state.body;
      if ( prevTitle !== newTitle || prevBody !== newBody ) {
        this.props.updateNote(this.state);
      }
    } else {
      let note;
      if (this.state.title) {
        note = Object.assign({}, this.state);
        this.props.saveNewNote(note);
      } else {

        note = Object.assign({}, this.state, { title: "Untitled Note"});
        this.props.saveNewNote(note);
      }
    }
    this.props.onUpdate(this.state.title);
  }
  //   let note = this.props.noteDetail;
  //
  //   if (note.id) {
  //     note = Object.assign({}, this.state, { id: note.id });
  //     this.props.updateNote(note);
  //   } else {
  //     if (this.state.title) {
  //       note = Object.assign({}, this.state);
  //       this.props.saveNewNote(note);
  //     } else {
  //
  //       note = Object.assign({}, this.state, { title: "Untitled Note"});
  //       this.props.saveNewNote(note);
  //     }
  //   }
  // }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="note-detail group">
        <div className="detail-wrapper">
          <h4>Detail View</h4>
          <form onSubmit={ this.handleSubmit }>
            <input type="submit" value="Save"/>
            <h4>***Toolbar Coming Soon***</h4>
            <input type="text"
              value={this.state.title}
              onChange={ this.update("title")}
              className="note-title-input"
              placeholder="Title your note"/>
            <br/>
            <textarea
              value={this.state.body}
              onChange={ this.update("body")}
              className="note-input-body"
              placeholder="Just start typing..."></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteDetail;
