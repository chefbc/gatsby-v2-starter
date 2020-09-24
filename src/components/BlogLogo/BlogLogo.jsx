import React, { Component } from "react";
import { Link } from "gatsby";
import "./BlogLogo.css";

class BlogLogo extends Component {
  render() {
    const { logo, url, title, cssClass } = this.props;
    if (logo) {
      return (
        <Link className={ cssClass || "blog-logo" } to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
