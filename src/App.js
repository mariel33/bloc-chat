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
      activeRoom: ""
    };

  }
  
  render() {
    return (
      <div className="App">
        <aside className="current-rooms">
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} />
        </aside>
        <div>
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
        </div>
      </div>
    );
  }
}

export default App;
