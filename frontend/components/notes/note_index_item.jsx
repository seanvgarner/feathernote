import React from 'react';
import Moment from 'moment';
import { withRouter } from 'react-router';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.switchToNote = this.switchToNote.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.destroyNote(this.props.note);
  }

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
          <div className="delete-note" onClick={ this.handleDelete }>
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

export default withRouter(NoteIndexItem);
