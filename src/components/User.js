import React, { Component } from 'react';
import './../App.css';



class User extends Component {
    constructor(props) {
        super(props)

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);

    }

    logIn() {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider).then((result) => {
            console.log("signed in");
            const user = result.user;
            this.props.setUser(user);
        })
    }

    logOut() {
        this.props.firebase.auth().signOut().then((result) => {
            console.log("signed out");
            this.props.setUser(null);
        })
    }

    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged(user => {
            this.props.setUser(user);
        });
    }


    render() {
        return (
            <section>
                <div>
                    <h3>Welcome, {this.props.activeUser}!</h3>

                    {this.props.activeUser === 'Guest' ?
                        <button className="sign-in" onClick={() => this.logIn()}>Log in</button>
                        :
                        <button className="sign-in" onClick={() => this.logOut()}>Log out</button>
                    }

                </div>
            </section>

        );
    }
}

export default User;