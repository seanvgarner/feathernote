import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import NoteIndexContainer from './notes/note_index_container';
import NoteDetailContainer from './notes/note_detail_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    this.props.getAllNotes();
  }

  onUpdate(noteChange) {
    this.props.getAllNotes();
  }


  // add note detail container after note index cont
  render() {
    const { children, currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="main group">
          <SidebarContainer router={this.props.router}/>
          <NoteIndexContainer />
          <NoteDetailContainer onUpdate={ this.onUpdate }/>
          { children }
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}

export default App;
