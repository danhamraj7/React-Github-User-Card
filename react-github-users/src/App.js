import React, { Component } from "react";

import Card from "./components/GithubCard";
import FollowerList from "./components/FollowerList";
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
        console.log(error.error);
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    return (
      <div>
        <h1>My Information</h1>
        <Card
          name={this.state.userData.name}
          login={this.state.userData.login}
          location={this.state.userData.location}
          company={this.state.userData.company}
          bio={this.state.userData.bio}
          img={this.state.userData.avatar_url}
        />
        <h1>Followers</h1>
        <div>
          <FollowerList />
        </div>
      </div>
    );
  }
}

export default App;
