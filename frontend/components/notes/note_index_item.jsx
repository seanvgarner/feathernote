import React from 'react';
import Moment from 'moment';

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
    this.props.switchNote(this.props.note);
    // this.props.getOneNote(this.props.note.id);
  }

  render() {
    const { title, body, updated_at } = this.props.note;
    let itemClass = "item group";
    if (this.props.currentNote) {
      if (this.props.note.id === this.props.currentNote.id) {
        itemClass = "item selected-note group";
      }
    }

    const timeAgo = Moment(updated_at).fromNow();


    return (
      <li onClick={ this.switchToNote } className={ itemClass }>
        <div className="list-container group">
          <div className="item-title">
            { title }
          </div>
          <div className="delete-note">
          </div>
          <div className="updated-at">
            { timeAgo }
          </div>
          <div className="index-body">
            { body }
          </div>
        </div>
      </li>
    );
  }
}

export default NoteIndexItem;
