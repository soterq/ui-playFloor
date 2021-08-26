import React, {Component} from 'react';
import axios from 'axios';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        };
        console.log(props)
    }


   componentDidMount() {
    // axios.get('http://localhost:8080/players').then( res =>{
    //    console.log(res)
    //     this.state({players: res.data})
    // })
    }

    render() {
        return (
            <div>
                <h1>Room Emmm</h1>
                <ul>
                    {/*{this.state.players.map(player => <li>{player.name}</li>)}*/}
                </ul>
            </div>
        );
    };
}

export default Room;
