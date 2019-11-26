import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, login, location, company, bio, img } = this.props;

    return (
      <div>
        <h3>{name}</h3>

        <h4>Login: {login}</h4>

        <h4>Location: {location}</h4>

        <h4>Company: {company}</h4>

        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}

export default Card;
