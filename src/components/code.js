/** @jsx */
// import { jsx } from "theme-ui";
// import React from "react";
// import { preToCodeBlock } from "mdx-utils";
// import theme from "prism-react-renderer/themes/nightOwl";
// import Highlight, { defaultProps } from "prism-react-renderer";
// const Code = props => {
//   const codeProps = preToCodeBlock(props);
//   if(!codeProps) {
//     return <pre {...props} />;
//   }
//   const { codeString, language } = codeProps;
//   return (
//     <Highlight
//       {...defaultProps}
//       code={codeString}
//       language={language}
//       theme={theme}
//     >
//       {({ className, style, tokens, getLineProps, getTokenProps }) => (
//         <pre
//           className={className}
//           style={style}
//           sx={{p: 1, overflowX: "scroll", variant: "prism-highlight"}}
//         >
//           {tokens.map((line, i) => (
//             <div
//               {...getLineProps({ line, key: i })}
//             >
//               {line.map((token, key) => (
//                 <span {...getTokenProps({token, key})}></span>
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   )
// };
// export default Code;