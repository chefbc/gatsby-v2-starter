import React, { Component } from "react";
import _ from "lodash";
import "./PostReadTime.css";

class PostReadTime extends Component {
  render() {
    const { prefix, time, postfix } = this.props;
    if (time) {
      return (
        <span>
          {prefix}
          {time}
          {postfix}
        </span>
      );
    }
    return null;
  }
}
export default PostReadTime;
