import styled from 'styled-components';
import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
const Section = styled.section`
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;


const Title = styled.p`
  font-size: 45px;
  color: #6B5B95;
  font-weight: 400;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  align-items: center;
`;
const Input = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
  color: #85144b;
`;
const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #3D9970;
  line-height: 30px;
  margin-top: 58px;
`;


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
                    <Button variant="outlined" color="primary" disabled={this.state.nickname.length<2}>
                        Join Now
                    </Button>
                </Content>
            </Section>
        </Container>
    );
    }
}
export default JoinPage;