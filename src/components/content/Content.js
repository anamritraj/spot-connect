import React, { Component } from "react";
import ContentHeader from "./content-header";
import ContentBody from "./content-body";

import "./content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader title="Here's what your friends are listening to" />
        <ContentBody />
      </div>
    );
  }
}
