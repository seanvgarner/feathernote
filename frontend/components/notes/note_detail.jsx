import React from 'react';
import ReactQuill from 'react-quill';
import SelectNotebookContainer from '../notebooks/select_notebook_container';
import TagsSelectContainer from '../tags/tags_select_container';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentNote || {
      title: "",
      body: "",
      id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentNote) {
      if (nextProps.currentNote.id !== this.state.id) {

        this.setState(nextProps.currentNote);
      }
    } else {
      this.setState({title: "", body: "", id: 0 });
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
    // this.props.onUpdate(this.state.title);
  }


  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  updateBody(text) {
    this.setState({ body: text });
  }

  render() {
    let saveButton = "save-button";
    if (!this.state.title) {
      saveButton += "-disabled";
    }

    let notes = this.props.notes;
    if (this.props.currentNotebook) {
      notes = notes.filter(note => this.props.currentNotebook.id === note.notebook_id);
    }

    if (notes.length === 0 ) {
      return (
        <div className="note-detail-empty">

        </div>
      );
    } else {
      return (
        <div className="note-detail group">
          <div className="detail-wrapper">
            <header className="detail-header group">
            <div onClick={ this.handleSubmit } className={ saveButton }>Save</div>
            <SelectNotebookContainer />
            <TagsSelectContainer />
            </header>
              <input type="text"
                value={this.state.title}
                onChange={ this.update("title")}
                className="note-detail-title-input"
                placeholder="Title your note"/>
              <div className="note-editor-container">
                <ReactQuill
                  theme="snow"
                  value={this.state.body}
                  onChange={ this.updateBody }/>
              </div>
          </div>
        </div>
      );
    }
  }
}


export default NoteDetail;
