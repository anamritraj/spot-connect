import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import socketIOClient from "socket.io-client";

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
    return <Content />;
  }
}
export default App;
export { socket };
