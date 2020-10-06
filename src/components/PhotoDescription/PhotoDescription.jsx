import React from "react";
import "./PhotoDescription.css";

class PhotoDescription extends React.Component {
  render() {
    const { author } = this.props;
    const { sourceUrl } = this.props;
    const { sourceText } = this.props;

    if (author) {
      return (
        <h2 className="photo-description">
          Photo by {author} on 
          <a href={sourceUrl || "/"}> {sourceText}</a></h2>
      );
    }
    /* eslint-disable */
    return <h2 className="photo-description"></h2>;
  }
}

export default PhotoDescription;
