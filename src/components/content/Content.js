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
      playing: null,
      last_played: null
    };
  }
  componentDidMount = () => {
    // Lets first get the recently played data from the server
    getRecentlyPlayedSongs()
      .then(({ data }) => {
        let songs = data.data.reduce((accum, curr) => {
          const song = {
            played_at: curr.data.played_at,
            song_id: curr.data.songid,
            album: curr.item.album,
            artists: curr.item.artists,
            duration: curr.item.duration_ms,
            name: curr.item.name,
            times_played: curr.item.times_played,
            url: curr.item.url
          };
          accum.push(song);
          return accum;
        }, []);
        this.setState({
          songs: songs,
          playing: false,
          last_played: songs[0]
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
    console.log(data);
  };

  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title="Here's what your friends are listening to" />
        <ContentBody state={this.state} />
      </div>
    );
  }
}
