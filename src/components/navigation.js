import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <>
    <div className="container">
      <nav style={{
        margin: `0 -20px 0px 0`,
      }}>
        <ul style={{
          padding: `15px 0 0 0`,
          margin: 0,
          width: `100%`,
          listStyle: `none`,
          textAlign: `right`,
          fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          textTransform: `uppercase`,
          fontSize: `0.9rem`,
        }}>
          <Link to="/"><li style={{
            display: `inline-block`,
            padding: `0 20px`,
          }}>Blog</li></Link>
          <Link to="/about"><li style={{
            display: `inline-block`,
            padding: `0 20px`,
          }}>About</li></Link>
          <li style={{
            display: `inline-block`,
            padding: `0 20px`,
          }}>Contact</li>
        </ul>
      </nav>
      <hr
        style={{
          background: `#555`,
        }}
      />
    </div>
  </>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
