import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import TechIcon from "../components/TechIcon"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial"
import BlogSlider from "../components/BlogSlider"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techHover: '' }
  }

  handleMouseEnter = (e) => {
    let newState = this.state;
    newState.techHover = e.currentTarget.id;
    this.setState(newState);
  }

  handleMouseLeave = (e) => {
    let newState = this.state;
    newState.techHover = '';
    this.setState(newState);
  }



  render() {

    const url = 'icons/HTML.svg';

    return (

      <StaticQuery query={ /* GraphQL */
        graphql`{
      html:file(relativePath:{eq:"icons/HTML.svg"}) {
      publicURL
      }
      css:file(relativePath:{eq:"icons/CSS.svg"}) {
      publicURL
      }
      js:file(relativePath:{eq:"icons/JavaScript.svg"}) {
      publicURL
      }
      bootstrap:file(relativePath:{eq:"icons/Bootstrap.svg"}) {
      publicURL
      }
      sass:file(relativePath:{eq:"icons/Sass.svg"}) {
      publicURL
      }
      git:file(relativePath:{eq:"icons/Git.svg"}) {
      publicURL
      }
      terminal:file(relativePath:{eq:"icons/command-line.svg"}) {
      publicURL
      }
      webdev:file(relativePath:{eq:"icons/webdev.svg"}) {
      publicURL
      }
      writing:file(relativePath:{eq:"icons/writing.svg"}) {
      publicURL
      }
      design:file(relativePath:{eq:"icons/design.svg"}) {
      publicURL
      }
      react:file(relativePath:{eq:"icons/React.svg"}) {
      publicURL
      }
      next:file(relativePath:{eq:"icons/next.svg"}) {
      publicURL
      }
      gatsby:file(relativePath:{eq:"icons/Gatsby.svg"}) {
      publicURL
      }
      php:file(relativePath:{eq:"icons/php.svg"}) {
      publicURL
      }
      wordpress:file(relativePath:{eq:"icons/wordpress.svg"}) {
      publicURL
      }
      background:file(relativePath:{eq:"josh-rose-506979-unsplash.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background2:file(relativePath:{eq:"background.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orange:file(relativePath:{eq:"orange2.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      writingBG:file(relativePath:{eq:"writing.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webdevBG:file(relativePath:{eq:"webdev.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designBG:file(relativePath:{eq:"design.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icons:  allFile(filter:{ relativeDirectory:{eq: "icons"} }){
    edges{
      node{
        relativePath
        childImageSharp {
          id
        }
      }
    }
  }
  }
`
      } render={(data) => (
        <>
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div>
              {/* <BackgroundImage tag="section"
                style={{
                  color: `white`,
                  minHeight: `100vh`,
                  width: `100%`,
                }}
                fluid={data.background.childImageSharp.fluid}
                backgroundColor={`#000`}
              > */}


              <div style={{ textAlign: `center` }}>
                <h1 style={{ padding: `10vh 0 0 0` }}>Bret Cameron</h1>
                <h2 style={{
                  fontWeight: `200`,
                  fontSize: `1.4rem`,
                  letterSpacing: `2.5px`,
                  margin: `5px 0 100px 0`,
                  textTransform: `uppercase`,
                  // textShadow: `2px 2px 5px black`,
                }}>Web Development Blog
                </h2>
              </div>

              <div className="slider-container"
                style={{
                  // background: `grey`, 
                  width: `100%`,
                }}>
                <BlogSlider />
              </div>
              {/* </BackgroundImage> */}
            </div>

          </Layout>
        </>
      )} />
    )

  }
}

export default IndexPage
