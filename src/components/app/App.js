import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";
import MainMenu from "../navigation/MainMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
      </div>
    );
  }
}
export default App;
