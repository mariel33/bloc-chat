import React, { Component } from 'react';
import './../App.css';


class RoomList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rooms: [],
            newRoomName: '',
            name: ''
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');

    };



    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat(room)});
        });

    }

    handleChange(e) {
        this.setState({ newRoomName: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newRoomName) { return }
    }

    createRoom() {
        this.roomsRef.push({
            name: this.state.newRoomName
        });
        this.setState({ newRoomName: ''})

    }

    selectRoom(key) {
        this.props.activeRoom(key);
    }
    

    deleteRoom(index) {
        const toRemove = this.state.rooms[index];
        const updatedRooms = this.state.rooms.filter((room) => { return room !== this.state.rooms[index]})
        this.setState({ rooms: updatedRooms });
        this.props.firebase.database().ref('rooms').child(toRemove.key).remove();
    }


    render() {

        return (
            <section className="room-list">
                <div className="side-nav">
                    <ul>
                            {this.state.rooms.map((room, index) => {
                                return (
                                    <div className="display-room-list" key={room.key} onClick={(e) => this.selectRoom(room, e)}><button onClick= {() => this.deleteRoom(index)}>x</button> {room.name}</div>
                                );
                            })}
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input type="text" name="newroom" placeholder="New Room" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)} /><br />
                                <button type="submit" onClick={() => this.createRoom()}>Create Room</button>
                            </form>
                    </ul>
                </div>
            </section>
                );
            }
        }
        
export default RoomList;