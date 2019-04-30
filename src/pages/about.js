import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

import TechIcon from "../components/TechIcon"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial"
import BlogSlider from "../components/BlogSlider"

import Layout from "../components/layout"
import SEO from "../components/seo"

// To do: make versions of the technology icons with white outlines 

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
      bret:file(relativePath:{eq:"bret.jpg"}) {
        childImageSharp {
          fluid (
            maxWidth: 500
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
                }}>About Me
                </h2>
              </div>

              <div className="slider-container">
                <div
                  style={{
                    color: `#DDD`,
                    padding: `50px 0px 20px 0px`,
                    maxWidth: `600px`
                  }}>
                  <p style={{
                    margin: `15px 0`,
                  }}>I’m Bret, a web developer, designer and writer based in London, and this is the home of my blog and portfolio.</p>
                  <p style={{
                    margin: `15px 0`,
                  }}>I'm currently available for freelance and contract work. If you'd like to get in touch, use <a href="#contact-me"
                    style={{
                      color: `#DDD`
                    }}>
                      the contact form at the bottom of this page.
                      </a>
                  </p>
                  <p style={{
                    margin: `15px 0`,
                  }}>I have experience with the following web development technologies:
                  </p>
                  <div style={{ marginLeft: `-5px` }}>
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="HTML5"
                      image={data.html}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="CSS3"
                      image={data.css}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="JavaScript"
                      image={data.js}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Bootstrap"
                      image={data.bootstrap}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Sass (SCSS)"
                      image={data.sass}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Git"
                      image={data.git}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Command Line (Git Bash)"
                      image={data.terminal}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="React.js"
                      image={data.react}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Next.js"
                      image={data.next}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="Gatsby.js"
                      image={data.gatsby}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="PHP"
                      image={data.php}
                    />
                    <TechIcon
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      title="WordPress"
                      image={data.wordpress}
                    />
                    <p style={{ height: `1rem`, fontStyle: `italic`, margin: `0 0 40px 0` }}>{this.state.techHover}</p>
                  </div>

                </div>

              </div>

            </div>

          </Layout>
        </>
      )} />
    )

  }
}

export default IndexPage
