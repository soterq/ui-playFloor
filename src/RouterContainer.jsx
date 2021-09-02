import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Container from "./container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Section,
    Content,
    Title,
    ContainerDiv,
    Input,
    Desc
} from './ContainerComponent';
import Room from "./Room";

class RouterContainer extends Component{


    render(){
    return (

                    <Router>
                        <Switch>
                            <Route path="/room">
                                <Room  />
                            </Route>
                            <Route path="/">
                               <Container />
                            </Route>
                        </Switch>
                    </Router>



    );
    }

}
export default RouterContainer;
