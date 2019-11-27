import React, { Component } from "react";

import styled from "styled-components";

import AnimateStyled from "animate-styled";

const StyledCard = styled.div`
  display: flex;

  background-color: #878f99;

  box-shadow: 0 15px 30px 0 black;

  transition: 0.3s;

  width: 60%;

  align-content: space-around;

  justify-content: baseline;

  border-radius: 1em;

  margin: 0 auto;
`;

const StyledInfoDiv = styled.div`
  padding: 1em;

  margin: 0.5em;
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

class Card extends Component {
  render() {
    const { name, login, location, company, bio, img } = this.props;

    return (
      <AnimateStyled name="slideOutLeft">
        <StyledCard>
          <ImageDiv>
            <Image src={img} alt="face" />
          </ImageDiv>

          <StyledInfoDiv>
            <h3>{name}</h3>

            <h4>Login: {login}</h4>

            <h4>Location: {location}</h4>

            <h4>Company: {company}</h4>

            <h4>Bio: {bio}</h4>
          </StyledInfoDiv>
        </StyledCard>
      </AnimateStyled>
    );
  }
}

export default Card;
