import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class TagsSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.currentNote.tags
    };
    this.deleteTagging = this.deleteTagging.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentNote && nextProps.currentNote ) {
      if (this.props.currentNote.tags.length !== nextProps.currentNote.tags.length) {
        this.setState({tags: nextProps.currentNote.tags});
      } else if (this.props.currentNote.id !== nextProps.currentNote.id) {
        this.setState({tags: nextProps.currentNote.tags});
      }
    }
  }

  deleteTagging(idx) {
    this.props.deleteTagging(this.state.tags[idx], this.props.currentNote.id);
    this.props.getOneNote(this.props.currentNote.id);
  }

  updateTags(tag) {
      const stateTagNames = this.state.tags.map(stateTag => stateTag.name);
    if (!stateTagNames.includes(tag)) {
      let newTag = { name: tag };
      this.props.addTag(newTag, this.props.currentNote.id);
      this.props.getOneNote(this.props.currentNote.id);
    }
  }

  render() {
    return(
      <div className="tags-select-container">
        <ReactTags tags={ this.state.tags }
            labelField={'name'}
            handleDelete={ this.deleteTagging }
            handleAddition={ this.updateTags }/>
      </div>
    );
  }
}

export default TagsSelect;
