import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from "./src/components/Code/Code"
import { preToCodeBlock } from 'mdx-utils'
//import { preToCodeBlock } from './src/components/Code/index'
//import { preToCodeBlock } from './src/components/Code/mdx-util'

// components is its own object outside of render so that the references to
// components are stable
const components = {
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        //console.log(props)
        // if there's a codeString and some props, we passed the test
        if (props) {
            //console.log('here')
            return <Code {...props} />
        } else {
            // it's possible to have a pre without a code in it
            //console.log('here2')
            return <pre {...preProps} />
        }
    },
}


//import CodeBlock from "./src/components/Code/CodeBlock";

// const components = {
//     //console.log({ ...props })
//     pre: props => <div {...props} />,
//     code: CodeBlock
// }

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)

// const Layout = ({ children }) => (
//     <MDXProvider components={components}>
//         <div style={{ margin: `0 auto`, maxWidth: 960, padding: `2rem` }}>
//             {children}
//         </div><div></div>
//     </MDXProvider>
// )

// export default Layout
