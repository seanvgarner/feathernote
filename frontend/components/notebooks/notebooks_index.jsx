import React from 'react';
import NotebookIndexItemContainer from './notebooks_index_item_container';
import Modal from 'react-modal';
import { FullscreenStyle } from '../modal_styles/fullscreen_style';
import AddNotebookContainer from './add_notebook_container';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNotebookModalOpen: false
    };

    this.toggleAddNotebookModal = this.toggleAddNotebookModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
  }

  toggleAddNotebookModal(e) {
    this.setState({addNotebookModalOpen: !this.state.addNotebookModalOpen});
  }

  closeAddModal() {
    this.setState({ addNotebookModalOpen: false });
  }


  render() {
    return(
      <div className="notebooks-index">
        <header className="notebooks-index-header">
          <div className="notebook-index-title">
            NoteBooks
          </div>
          <div className="add-notebook-modal-btn" onClick={ this.toggleAddNotebookModal }>
          </div>
        </header>
        <div className="notebook-item-list">
          <ul className="notebook-item-ul">
            {this.props.notebooks.map((notebook, idx) => (
              <NotebookIndexItemContainer
              key={`notebook-${idx}`}
              notebook={ notebook }
              closeInitialModal={ this.props.closeInitialModal } />
            ))}
          </ul>
        </div>
        <Modal
          style={ FullscreenStyle }
          isOpen={this.state.addNotebookModalOpen}
          onRequestClose={ this.closeAddModal}
          contentLabel="Modal">
          <AddNotebookContainer
            closeAddModal={this.closeAddModal}
            closeInitialModal={ this.props.closeInitialModal }/>
        </Modal>
      </div>
    );
  }
}

export default NotebooksIndex;
