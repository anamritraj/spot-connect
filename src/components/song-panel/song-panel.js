import React from "react";
import { Collapse, Col } from "antd";
import PanelHeader from "./panel-header";
import "./song-panel.css";
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  overflow: "hidden",
  border: "solid 1px #e8e8e8",
  boxShadow: "0 0 30px #f3f1f1"
};

export default function songPanel() {
  return (
    <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
      <Collapse bordered={false}>
        <Panel
          header={<PanelHeader />}
          key="1"
          showArrow={false}
          style={customPanelStyle}
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Col>
  );
}
