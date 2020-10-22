import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/Code/Code'
//import { preToCodeBlock } from 'mdx-utils'
import { preToCodeBlock } from './src/components/Code/index'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    console.info(props)

    //const props = ({ codeString, children, language, ...props })

    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}
//console.log(components)
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)


