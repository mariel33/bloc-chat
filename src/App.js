import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDdv5OFhhoTB480-DnDKfeYhzw11rRPYjo",
  authDomain: "bloc-chat-f9999.firebaseapp.com",
  databaseURL: "https://bloc-chat-f9999.firebaseio.com",
  projectId: "bloc-chat-f9999",
  storageBucket: "bloc-chat-f9999.appspot.com",
  messagingSenderId: "455146477181"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeRoom: '',
    };

    

  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room })
    console.log(room);
  }
  
  render() {
    const displayMessages = this.state.activeRoom;

    return (
      <div className="App">
        <aside className="list-rooms">
          <RoomList firebase={firebase} activeRoom={this.setActiveRoom.bind(this)} />
        </aside>
        <div>
          <main className="active-chat-room">
            <h2>{this.state.activeRoom.name}</h2>

            {displayMessages ?

            (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
            : (null)
            }
          </main>
        </div>
      </div>
    );
  }
}

export default App;
