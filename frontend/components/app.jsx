import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import NoteIndexContainer from './notes/note_index_container';
import NoteDetailContainer from './notes/note_detail_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getNotebooks();
    this.props.getAllNotes();
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {

  }

  onUpdate(noteChange) {
    this.props.getAllNotes();
  }


  // add note detail container after note index cont
  render() {
    const { children, currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="main-content-wrapper group">
        <div className="main group">

          <SidebarContainer router={this.props.router}/>
          <NoteIndexContainer />
          <NoteDetailContainer onUpdate={ this.onUpdate } notebooks={ this.props.notebooks }/>
          { children }
        </div>
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}

export default App;
