import React, { Component } from "react";
import styled from "styled-components";
//import AnimateStyled from "animate-styled";

const StyledCard = styled.div`
  display: flex;
  background-color: #878f99;
  box-shadow: 0 15px 30px 0 black;
  transition: 0.3s;
  width: 100%;
  align-content: space-around;
  justify-content: baseline;
  border-radius: 1em;
  margin: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;

const ImageDiv = styled.div`
  padding: 3em;
  margin: 0.5em;
`;

const StyledInfoDiv = styled.div`
  padding: 1em;
  margin: 0.5em;
`;

class Follower extends Component {
  render() {
    const { login, img } = this.props;

    return (
      <StyledCard>
        <ImageDiv>
          <Image src={img} alt="pic" />
        </ImageDiv>

        <StyledInfoDiv>
          <h4>Login: {login}</h4>
        </StyledInfoDiv>
      </StyledCard>
    );
  }
}

export default Follower;
