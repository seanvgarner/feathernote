import React from 'react';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.switchToNote = this.switchToNote.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   this.props.getOneNote(newProps.notes[0].id);
  // }

  switchToNote(e) {
    this.props.getOneNote(this.props.note.id);
  }

  render() {
    const { title, body, updated_at } = this.props.note;

    return (
      <li onClick={ this.switchToNote }>
        {title} {body} {updated_at}
        <button>Delete me</button>
      </li>
    );
  }
}

export default NoteIndexItem;
