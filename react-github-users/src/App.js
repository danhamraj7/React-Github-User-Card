import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  getProfile = () => {
    axios
      .get(`https://api.github.com/users/danhamraj7`)

      .then(response => {
        this.setState({ userData: response.data });

        console.log(this.state.userData);
      })

      .catch(error => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    return (
      <div>
        <h1>My Information</h1> <h1>Followers</h1>{" "}
      </div>
    );
  }
}

export default App;
