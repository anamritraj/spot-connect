import React from "react";
import SongPanel from "../song-panel/song-panel";
import { Row } from "antd";

export default function contentBody() {
  return (
    <div>
      <Row>
        <SongPanel />
        <SongPanel />
        <SongPanel />
        <SongPanel />
        <SongPanel />
      </Row>
    </div>
  );
}
