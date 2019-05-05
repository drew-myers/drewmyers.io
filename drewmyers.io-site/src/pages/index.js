import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <div style={{ textAlign: "center" }} >
      <Img style={{ borderRadius: '50%' }} fixed={data.file.childImageSharp.fixed} />
    </div>
    <h1>Hi! Welcome to my personal site!</h1>
    <p>
      This is mostly currently under construction, but thanks for stopping by lol.
    </p>
    <p>
  Lorem ipsum dolor sit amet, mea ne facete scaevola recusabo, eam in tota adhuc movet. Iriure fuisset ullamcorper in nam, vel at exerci eirmod. Ne ius justo epicuri. An nam quaeque intellegat, sed ut aliquid voluptaria.

Te oporteat contentiones vel. Ei eam alii omittantur dissentiunt. Vidit clita prodesset eu vel, ubique fabulas moderatius et quo. Commodo platonem vel te.

Partiendo euripidis philosophia duo ex, omnis ridens accusamus in quo. Eum porro graece ad, iusto quidam indoctum ex duo. Ad usu commodo voluptua, te primis salutandi usu. Ut vel populo delicatissimi.

Ius in minim lobortis, detracto adversarium cu eam, nonumy omnesque verterem ne vis. Sit te noster mandamus indoctum, duo quis vidisse cu, vero saperet facilis ei has. Eu sit constituam signiferumque. Mel ei enim voluptatum. Ex per alii senserit, mei eu assum voluptatibus. Ius alii dicit ut, at eum affert ubique, inani laboramus appellantur ea his.

Quaestio platonem eos in, ex vivendum maluisset eos, eu vero idque clita vel. In fugit noster vituperatoribus usu, an ridens similique nam. Ad dicat fierent pri, hinc eius harum mei ut, autem suscipiantur ex usu. Error melius intellegebat nam cu, vero rebum albucius at pro, per ad case nullam
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
