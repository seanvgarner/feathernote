import React from 'react';
import Dropdown from 'react-dropdown';

class SelectNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookId: this.props.currentNote.notebook_id || this.props.notebooks[0]
    };

    this.getNotebookTitles = this.getNotebookTitles.bind(this);
    this.getDefaultOption = this.getDefaultOption.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentNote.id !== nextProps.currentNote.id ) {
      this.setState({ notebookId: nextProps.currentNote.notebook_id });
    }
  }

  getNotebookTitles() {
    const notebookTitles = this.props.notebooks.map((notebook) => notebook.title);
    return notebookTitles;
  }

  getDefaultOption() {
    let defaultTitle;
    this.props.notebooks.forEach(notebook => {
      if (notebook.id === this.state.notebookId) {
        defaultTitle = notebook.title;
      }
    });
    return defaultTitle;
  }

  handleSelect(selection) {
    let selectedId;
    this.props.notebooks.forEach(notebook => {
      if (notebook.title === selection.value) {
        selectedId = notebook.id;
      }
    });
    const currentNote = this.props.currentNote;
    const updatedNote = Object.assign({}, currentNote, { notebook_id: selectedId });
    this.props.updateNote(updatedNote);
    this.setState({ notebookId: selectedId });

  }

  render() {
    const options = this.getNotebookTitles();
    const defaultOption = this.getDefaultOption();
    return (
      <div className="dropdown-notebook-menu">
        <Dropdown options={ options } onChange={ this.handleSelect } value={ defaultOption}/>
      </div>
    );
  }
}

export default SelectNotebook;
