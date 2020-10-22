import React from "react";
import "./Code2.css";

class Code extends React.Component {
render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
    }
}
export default Code;
