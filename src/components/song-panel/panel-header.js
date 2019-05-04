import React from "react";
import { Col, Row } from "antd";
import { timeDifference } from "../../utils/util.functions";
export default function panelHeader(props) {
  const getTime = dt => {
    let datetime = new Date(parseInt(dt));
    let date = datetime.toLocaleDateString();
    let time = datetime.toLocaleTimeString();
    return date + " " + time;
  };

  return (
    <div className="song-panel-header">
      <Row>
        <Col span={4}>
          <img style={{ width: "85px" }} src={props.image} alt="song art" />
        </Col>
        <Col span={20}>
          <p className="song-title">{props.name}</p>
          <p className="album">{props.album}</p>
          <p className="artist">
            {props.artists.map((item, index) => {
              return (
                <span key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                  {index < props.artists.length - 1 ? ", " : null}
                </span>
              );
            })}
          </p>
          <p className="time" title={getTime(props.lastplayed)}>
            {timeDifference(parseInt(props.lastplayed))}
          </p>
        </Col>
      </Row>
    </div>
  );
}
