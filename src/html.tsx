import React from 'react'
import EpgBackgroundImage from './assets/images/guide-bg.sized.png'

interface Props {
  htmlAttributes?: Record<string, unknown>
  headComponents?: React.ReactNode
  bodyAttributes?: Record<string, unknown>
  preBodyComponents?: React.ReactNode
  body?: string
  postBodyComponents?: React.ReactNode
}

const HTML: React.FC<Props> = props => {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {props.headComponents}

        <link rel="preload" as="image" href={EpgBackgroundImage} />

        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "c8cca799c00748039d7a9cd8c3ae5b7b"}' />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML