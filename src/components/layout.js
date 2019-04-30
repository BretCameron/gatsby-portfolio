/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main>{children}</main>
        <footer style={{ textAlign: `center` }}><hr />
          © Bret Cameron {new Date().getFullYear()}<br /><span style={{ fontSize: `0.9rem` }}>Built with <i>React.js</i> and <i>Gatsby</i></span>
          <br /><br />
        </footer>
        {/* </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
