import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>DrewMyers.io</title>
    </Helmet>
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </div>
)
