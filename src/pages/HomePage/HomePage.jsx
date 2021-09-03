import React, { useContext } from "react";

import { ContainerDiv, Content, Desc, Input, Section, Title } from "./styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TenisContext from "../../containers/context/tenis-context";

export default function HomePage() {
  const ctx = useContext(TenisContext);

  return (
    <ContainerDiv>
      <Section>
        <Content>
          <Title>Welcome on the 4-th floor</Title>
          <Desc>
            After you will select your nick name <br />
            Click on Join Now button <br />
            After you will be able to join on queue to play <br />
            GOOD LUCK <br />
          </Desc>
          <Input
            type="text"
            placeholder="choose your nickname"
            value={ctx.nickName}
            onChange={ctx.handleChangeNickName}
          />

          <Button
            variant="outlined"
            color="primary"
            disabled={ctx.nickName.length < 2}
          >
            <Link to="/room">Join Now</Link>
          </Button>
        </Content>
      </Section>
    </ContainerDiv>
  );
}
