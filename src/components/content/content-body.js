import React from "react";
import SongPanel from "../song-panel/song-panel";
import { Row } from "antd";

export default function contentBody(props) {
  console.log(props.state);
  return (
    <div>
      <Row>
        {props.state.songs.map(element => {
          return <SongPanel data={element} key={element.played_at} />;
        })}
      </Row>
    </div>
  );
}
