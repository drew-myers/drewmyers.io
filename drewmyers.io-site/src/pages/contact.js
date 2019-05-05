import React from "react"
import Layout from "../components/layout"
import { colorConstants } from "../styles/style-constants"

export default () => (
  <Layout>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a style={{ color: colorConstants.secondaryColor }}
         href="mailto:drew@drewmyers.io">
         drew@drewmyers.io
      </a>
    </p>
  </Layout>
)
