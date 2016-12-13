import React from 'react';
import SelectNotebookContainer from '../notebooks/select_notebook_container';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentNote || {
      title: "",
      body: "",
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
    if (this.state.title) {
      if (this.props.currentNote) {
        const prevTitle = this.props.currentNote.title;
        const prevBody = this.props.currentNote.body;
        const newTitle = this.state.title;
        const newBody = this.state.body;
        if ( prevTitle !== newTitle || prevBody !== newBody ) {
          if (this.state.title) {
            this.props.updateNote(this.state);
          } else {
            //Not using this logic currently but might use if I have to change things for auto save.
            let untitledNote = Object.assign({}, this.props.currentNote, this.state, {title: "Title your note"});
            this.props.updateNote(untitledNote);
          }
        }
      }
    }
    this.props.onUpdate(this.state.title);
  }


  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  render() {
    let saveButton = "save-button";
    if (!this.state.title) {
      saveButton += "-disabled";
    }

    if (this.props.notes.length === 0 ) {
      return (
        <div className="note-detail-empty">

        </div>
      );
    } else {
      return (
        <div className="note-detail group">
          <div className="detail-wrapper">
            <SelectNotebookContainer />
            <form onSubmit={ this.handleSubmit }>
              <input type="submit" value="Save" className={ saveButton }/>
              <br/>
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
}

export default NoteDetail;
