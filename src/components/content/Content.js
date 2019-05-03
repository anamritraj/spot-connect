import React, { Component } from "react";
import ContentHeader from "./content-header";
import ContentBody from "./content-body";
import { socket } from "../app/App";
import "./content.css";

export default class Content extends Component {
  componentDidMount() {
    socket.emit("join", "Anand's Spotify");
    socket.on("updated_song", this.updateSong);
  }

  updateSong = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title="Here's what your friends are listening to" />
        <ContentBody />
      </div>
    );
  }
}
