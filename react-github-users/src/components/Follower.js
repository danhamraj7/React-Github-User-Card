import React, { Component } from "react";

class Follower extends Component {
  render() {
    const { login, img } = this.props;

    return (
      <div>
        <h4>Login: {login}</h4>
      </div>
    );
  }
}

export default Follower;
