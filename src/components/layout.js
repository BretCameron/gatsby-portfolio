/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Header from "./header"
import Navigation from "./navigation"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
        {
          background:file(relativePath:{eq:"background.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `}
    render={data => (
      <>

        <BackgroundImage
          tag="section"
          fluid={data.background.childImageSharp.fluid}
          backgroundColor={`#171717`}
          style={{
            color: `white`,
            width: `100%`,
            // backgroundImage: `url(${data.background.publicURL})`,
            // backgroundRepeat: `no-repeat`,
            // backgroundSize: `cover`,
            // backgroundPosition: `top left`,
            minHeight: `100vh`,
            display: `flex`,
            flexDirection: `column`
          }}
        >
          <main style={{
            flex: `auto`,
          }}>
            <Navigation />
            {children}
          </main>
          <footer style={{
            textAlign: `center`,
            flexShrink: 0,
            background: `#01010199`
          }}><hr />
            © Bret Cameron {new Date().getFullYear()}<br /><span style={{ fontSize: `0.9rem` }}>Built with <i>React.js</i> and <i>Gatsby</i></span>
            <br /><br />
          </footer>
        </BackgroundImage>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
