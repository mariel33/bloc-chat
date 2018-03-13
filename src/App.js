import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <RoomList firebase = {firebase}/>
      </div>
    );
  }
}

export default App;
