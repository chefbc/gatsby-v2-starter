//import React from "react";
import { render } from "react-dom";
import { Wrapper } from "./styles";
import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

//import Test from "../components/Test/Test";

// A basic example
import Basic from "./Basic";

//import { MDXProvider } from '@mdx-js/tag'
import One from "./one.mdx"

// Including line numbers
import WithLineNumbers from "./WithLineNumbers";

// Integration with react-simple-code-editor
//import Editor from "./Editor";

// const App = () => (
//   <Wrapper>
//     <h1>Welcome to prism-react-renderer!</h1>
//     <Basic />
//     <hr />
//     <h2>With line numbers:</h2>
//     <WithLineNumbers />
//     <hr />
//     {/* <h2>Now for an editor example:</h2>
//     <Editor /> */}
//     <hr />
//     <h3>Changelog</h3>
//     <p>v1.1.0 2020-03-10: Updated deps, added editor example</p>
//   </Wrapper>
// );

// render(<App />, document.getElementById("root"));


class CodePage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>Welcome to prism-react-renderer!</h1>
        <Basic />
        <One />
        <hr />
        <h2>With line numbers:</h2>
        <WithLineNumbers />
        <hr />
      </div>
    );
  }
}

// class CodePage extends Component {
//   render() {

//     const components = {
//       h1: 'Title',
//       h2: 'Subtitle',
//     }

//     return (
//       // <MDXProvider components={components}>
//       //   <One />
//       // </MDXProvider>
//       <Test components={components}>
//         <One />
//       </Test>
//     );
//   }
// }

export default CodePage;