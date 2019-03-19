import { MDXProvider } from '@mdx-js/tag'
import React from 'react'
import Code from './src/components/Code'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: ({ children: { props } }) => {
    // if there's a codeString and some props, we passed the test
    if (props.children && props.className) {
      return (
        <Code
          codeString={props.children}
          language={props.className.replace('language-', '')}
          {...props}
        />
      )
    }
    // it's possible to have a pre without a code in it
    return <pre />
  }
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
