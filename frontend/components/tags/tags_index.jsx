import React from 'react';
import TagIndexItemContainer from './tag_index_item_container';


class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="tags-index">
        <header className="tags-index-header">
          <div className="tags-index-title">
            Tags
          </div>
        </header>
        <div className="full-tag-list">
          <ul className="tag-item-ul">
            { this.props.tags.map((tag, idx) => (
              <TagIndexItemContainer
              key={`tag-${idx}`}
              tag={ tag }
              closeTagsModal={ this.props.closeTagsModal } />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TagsIndex;
