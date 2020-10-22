// // exports.preToCodeBlock = preProps => {
// //     console.log(preProps.children)
// //     if (
// //       // children is MDXTag
// //       preProps.children &&
// //       // MDXTag props
// //       preProps.children.props &&
// //       // if MDXTag is going to render a <code>
// //       preProps.children.props.mdxType === "code"
// //     ) {
// //       // we have a <pre><code> situation
// //       const {
// //         children: codeString,
// //         props: { className, ...props }
// //       } = preProps.children.props;

// //       //console.log(preProps.children.props)
  
// //       return {
// //         codeString: codeString.trim(),
// //         language: className && className.split("-")[1],
// //         ...props
// //       };
// //     }
// //     //console.log(preProps.children.props)
// //     return undefined;
// //   };

//   exports.preToCodeBlock = preProps => {
//     //console.log(preProps)

//     if (
//       // children is MDXTag
//       preProps.children &&
//       // MDXTag props
//       preProps.children.props &&
//       // if MDXTag is going to render a <code>
//       preProps.children.props.mdxType === "code"
//     ) {
//       // we have a <pre><code> situation
//       const {
//         children: codeString,
//         //children: codeString,
//         props: { className, ...props }
//       } = preProps.children.props;

//     //   const {
//     //     children: codeString,
//     //     className = "",
//     //     ...props
//     //   } = preProps.children.props;

//     //   const match = className.match(/language-([\0-\uFFFF]*)/);
//       //const { sourceText } = this.props;

//       //const { codeString } = preProps.children.props.children
    
//       //const codeString = preProps.children.props.children.toString()
//       //preProps.children.props
//       //const { children } = preProps.children.props.children

//       //const { className, ...props } = preProps.children.props
      
//       //console.info(codeString)
//       //console.log(className && className.split("-")[1])

//       //console.log('hi')
  
//       return {
//         codeString: codeString.trim(),
//         //className,
//         //language: match != null ? match[1] : "",
//         language: className && className.split("-")[1],
//         ...props
//       };
//     }
//     return undefined;
//   };