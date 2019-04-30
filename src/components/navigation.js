import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <>
    <nav>
      <ul style={{
        margin: 0,
        padding: 0,
        listStyle: `none`,
      }}>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  </>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
