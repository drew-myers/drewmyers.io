import React from "react"
import { colorConstants } from "../styles/style-constants"
import Headroom from "react-headroom"
import { rhythm } from '../utils/typography'

import { Link } from "gatsby"

const linkBg = `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, white 1px, white 2px, rgba(0, 0, 0, 0) 2px)`;

const ListLink = props => (
  <li style={{ marginBottom: `0em`, display: `inline-block`, marginRight: `1rem` }}>
    <Link 
      style={{ color: `white`, backgroundImage: linkBg }}
          to={props.to}>{props.children}
    </Link>
  </li>
)

export default () => (
  // marginBottom: `1.5rem`,
  <Headroom wrapperStyle={{ marginBottom: rhythm(1) }}
    style={{ backgroundColor: colorConstants.secondaryColor }}>
    <div style={{ paddingTop: rhythm(1/2), paddingBottom: rhythm(1/2) }}>
      <Link to="/" style={{ backgroundImage: `none` }}>
        <h3 
          style={{ marginLeft: rhythm(1), color: `white`, display: `inline` }}>
          DrewMyers.io
        </h3>
      </Link>
      <ul style={{ marginBottom: `0em`, listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </Headroom>
)

