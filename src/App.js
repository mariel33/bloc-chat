import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
      user: null
    };

      }

  setActiveRoom(room) {
    this.setState({ activeRoom: room })
    console.log(room);
  }

  setUser(user){
    this.setState({user: user})
    console.log(user);
  }

  render() {
    const displayMessages = this.state.activeRoom;
    const activeUser = this.state.user === null ? 'Guest' : this.state.user.displayName;


    return (
      <div className="App">
        <aside>
          <h2 className="hero-title">Bloc Chat</h2>
          <User className ="greeting" firebase={firebase} setUser={this.setUser.bind(this)} activeUser={activeUser}/><br/>
          <p className="side-text">Available rooms:</p>      
          <RoomList className="list-rooms" firebase={firebase} activeRoom={this.setActiveRoom.bind(this)} />
        </aside>
        <div>

          <main className="active-chat-room">
            <h2 className="room-title">{this.state.activeRoom.name}</h2>

            {displayMessages ?

              (<MessageList className="list-of-messages" firebase={firebase} activeRoom={this.state.activeRoom.key} user={activeUser}/>)
              : (null)
            }

          </main>
        </div>
      </div>
    );
  }
}

export default App;
