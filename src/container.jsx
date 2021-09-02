import React, {Component} from 'react';
import axios from 'axios';
import RouterContainer from "./RouterContainer";
import {ContainerDiv, Content, Desc, Input, Section, Title} from "./ContainerComponent";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class Container extends Component {
    state = {
        nickname: ""
    };

    handleChange = (e) => {
        this.setState({
            nickname: e.target.value
        })
    };

    render() {
        return (

            <ContainerDiv>
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
                            <Input type='text' placeholder='choose your nickname' value={this.state.nickname}
                                   onChange={this.handleChange}/>

                            <Button variant="outlined" color="primary" disabled={this.state.nickname.length < 2}>
                                <Link to="/room" nickname={this.state.nickname}> Join Now</Link>
                            </Button>
                        </Content>
                    </Section>

                </ContainerDiv>
        )
    }
}

export default Container;
