import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import resume from "../pdf/drew-myers-resume.pdf"

export default ({ data }) => (
  <Layout>
    <div style={{ textAlign: "center" }} >
      <Img style={{ borderRadius: '50%' }} fixed={data.file.childImageSharp.fixed} />
    </div>
    <p style={{ marginTop: '40px' }}>
      Hi, I'm Drew. I'm an enthusiastic full stack dev with 6+ years of experience.
    </p>
    <p>
      <a href={resume} download>Here's my resume</a>, if you want it
    </p>
    <p>
      If you want to get in contact with me you can <a href="mailto:drew@drewmyers.io">email me</a> or hit me up on
      <a href="https://www.linkedin.com/in/drewmyerslin/"> LinkedIn</a>.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
