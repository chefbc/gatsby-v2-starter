import React from "react";
import moment from "moment";
import "./PostDate.css";

class PostDate extends React.Component {
  render() {
    const { date } = this.props;

    var postdate = new Date(date);
    postdate.setDate(postdate.getDate() + 1);

    return (
      <time
        className="post-date"
        dateTime={moment(postdate).format("YYYY-MM-DD")}
      >
        {moment(postdate).format("MM.DD.YYYY")}
      </time>
    );
  }
}

export default PostDate;
