import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find your Repos number <a href="https://github.com/azdaves"><i className="fa fa-github-alt fa-2x"></i></a></h1>
        </header>
        <Form getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> : <p>Please enter a username.</p> }
      </div>
    );
  }
}

export default App;
