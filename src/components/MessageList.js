import React, { Component } from 'react';
import './../App.css';

class MessageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        };

        this.messagesRef = this.props.firebase.database().ref('messages');

    };



    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.message.concat(message) })
        });

    }

    render() {
        const activeRoom = this.props.activeRoom;
        return (
            <div>
            </div>
        );


    }

}

export default MessageList;

