import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import socketIOClient from "socket.io-client";

import MainMenu from "../navigation/MainMenu";
import Content from "../content/Content";

var socket;
class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:9000/"
    };
    socket = socketIOClient(this.state.endpoint);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9000/login?email=anandamritraj904@gmail.com`)
      .then(res => {
        if (!res.data.success) {
          window.location.href = "http://localhost:9000/login";
        }
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
        </div>
        <Content />
      </Router>
    );
  }
}
export default App;
export { socket };
