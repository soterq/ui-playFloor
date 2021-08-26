import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
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
    Container,
    Input,
    Desc
} from './JoiPageComponent';
import Room from "./Room";

class JoinPage extends Component{

    state = {
        nickname : ""
    };

    handleChange = (e)=>{
        this.setState({
            nickname:e.target.value
        })
    }

    render(){
    return (
        <Container>
            <Section>
                <Content>
                    <Title>
                        Welcome on the 4-th floor
                    </Title>
                    <Desc>
                        After you will select your nick name <br/>
                        Click on Join Now button <br/>
                        After you will be able to join on queue to play <br/>
                        GOOD LUCK <br/>
                    </Desc>
                    <Input type='text' placeholder='choose your nickname'  value={this.state.nickname} onChange={this.handleChange}/>
                    <Router>
                    <Button variant="outlined" color="primary" disabled={this.state.nickname.length<2}>
                        <Link to="/room"> Join Now</Link>
                    </Button>
                        <Switch>
                            <Route path="/room">
                                <Room nickname = {this.state.nickname} />
                            </Route>
                        </Switch>
                    </Router>
                </Content>
            </Section>
        </Container>


    );
    }

}
export default JoinPage;
