import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { notes } = this.props;
    const noteItems = notes.map((note) => {
      return (<NoteIndexItemContainer key={`note-${note.id}`} note={ note } />);
      }
    );
    const noteCount = `${noteItems.length} notes`;
    return (
      <div className="note-index group">
        <header className="index-header">
          <h4>Notes</h4>
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
