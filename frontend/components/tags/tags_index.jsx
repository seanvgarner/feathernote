import React from 'react';
import TagIndexItemContainer from './tag_index_item_container';


class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <ul>
        { this.props.tags.map((tag, idx) => (
          <TagIndexItemContainer
          key={`tag-${idx}`}
          tag={ tag }
          closeTagsModal={ this.props.closeTagsModal } />
        ))}
      </ul>
    );
  }
}

export default TagsIndex;
