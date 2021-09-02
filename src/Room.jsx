import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from "react-router";
import {ContainerDiv} from "./ContainerComponent";

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "1 player",
                    id: 1
                },
                {
                    name: "2 player",
                    id: 2
                }
            ],
        };
        console.log(this.props)


    }


    componentDidMount() {
        // axios.get('http://localhost:8080/players').then( res =>{
        //    console.log(res)
        //     this.state({players: res.data})
        // })
    }

    render() {
        // console.log(this.props.nickname.length)
        // if(!this.props.nickname > 2){
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                <ContainerDiv>
                    {/*<h1>{this.props.nickname}</h1>*/}
                    <ul>
                        {this.state.players.map(player => <li key={player.id}>{player.name}</li>)}
                    </ul>
                </ContainerDiv>
            </div>
        );
    };
}

export default Room;
