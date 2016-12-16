import React from 'react';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.props.getAllNotes();
    this.props.switchTag(this.props.tag);
    this.props.closeTagsModal();
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteTag(this.props.tag);
    this.props.getAllNotes();

    this.props.switchTag(null);
  }

  render() {
    return(
      <li className="tag-index-item" onClick={ this.handleSelect }>
        <div className="delete-x" onClick={ this.handleDelete }>x</div>
        <div className="tag-name-wrapper">
          <p>{ this.props.tag.name }</p>
        </div>
      </li>
    );
  }
}

export default TagIndexItem;
