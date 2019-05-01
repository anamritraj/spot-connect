import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainMenu from "../navigation/MainMenu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
        </div>
      </Router>
    );
  }
}
export default App;
