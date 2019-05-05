import React from "react";
import SongPanel from "../song-panel/song-panel";
import { Row } from "antd";

export default function contentBody(props) {
  console.log(props.state);
  return (
    <div>
      <Row>
        {props.state.songs.map((element, index) => {
          return (
            <SongPanel
              data={element}
              key={element._id}
              isPlaying={index === 0 && props.state.playing ? true : false}
            />
          );
        })}
      </Row>
    </div>
  );
}
