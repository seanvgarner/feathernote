import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if ( !this.props.currentNote && nextProps.notes.length > 0){
      this.props.switchNote(nextProps.notes[0]);
    }
  }


  render() {
    let notes = this.props.notes;
    let title = "Notes";
    let headerClass = "index-header";
    if (this.props.currentNotebook) {
      notes = notes.filter(note => this.props.currentNotebook.id === note.notebook_id);
      title = this.props.currentNotebook.title;
      headerClass += "-notebook-style";
    }

    const noteItems = notes.map((note) => {
      return (<NoteIndexItemContainer key={`note-${note.id}`} note={ note } />);
      }
    );
    const noteCount = `${noteItems.length} notes`;
    return (
      <div className="note-index group">
        <header className={ headerClass }>
          <div className="index-title-wrapper">
            <h4>{title}</h4>
          </div>
          <div className="sub-header">
            <div className="note-count">{ noteCount }</div>
          </div>
        </header>
        <div className="index-list group">
          <ul className="group">
            { noteItems }
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteIndex;
