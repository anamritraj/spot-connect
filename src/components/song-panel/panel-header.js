import React from "react";
import { Col, Row } from "antd";

export default function panelHeader() {
  return (
    <div className="song-panel-header">
      <Row>
        <Col span={4}>
          <img
            style={{ width: "85px" }}
            src="https://i.scdn.co/image/f54d58d3c8ff2fb935cfbd8461a7bf867ec88e8b"
            alt="song art"
          />
        </Col>
        <Col span={20}>
          <p className="song-title">Back to you (13 Reasons why)</p>
          <p className="album">13 Reasons Why</p>
          <p className="artist">Selena Gomez</p>
          <p className="time">Yesterday, 12:44 PM</p>
        </Col>
      </Row>
    </div>
  );
}
