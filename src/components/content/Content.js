import React, { Component } from "react";
import ContentHeader from "./content-header";
import ContentBody from "./content-body";
import { socket } from "../app/App";
import { getRecentlyPlayedSongs } from "../../utils/song.service";
import "./content.css";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      playing: null
    };
  }
  componentDidMount = () => {
    // Lets first get the recently played data from the server
    getRecentlyPlayedSongs()
      .then(({ data }) => {
        let songs = data.data.reduce((accum, curr) => {
          accum.push(curr.song);
          return accum;
        }, []);
        this.setState({
          songs: songs,
          playing: true
        });
      })
      .catch(function(error) {
        // Todo: Show a notification toast.
        console.log("There was an error in getting the data");
        console.log(error);
      });

    socket.emit("join", "Anand's Spotify");

    socket.on("updated_song", this.updateSong);
  };

  updateSong = data => {
    if (data.is_playing === false) {
      const newState = {
        ...this.state,
        playing: false
      };
      this.setState(newState);
    } else {
      let songs = [data, ...this.state.songs];
      const newState = {
        songs,
        playing: true
      };
      this.setState(newState);
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title="Here's what I'm listening to" />
        <ContentBody state={this.state} />
      </div>
    );
  }
}
