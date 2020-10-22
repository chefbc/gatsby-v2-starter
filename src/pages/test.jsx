import React, { Component } from "react";
import Helmet from "react-helmet";


import One from "./one.mdx"


class MyPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`KC`} />
        <One />
      </div>
    );
  }
}

export default MyPage;
