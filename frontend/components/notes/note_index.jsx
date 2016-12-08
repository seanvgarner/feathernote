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

    return (
      <div>
        <h4>I am the NoteIndex</h4>
        <ul>
          { noteItems }
        </ul>
      </div>
    );
  }
}

export default NoteIndex;
