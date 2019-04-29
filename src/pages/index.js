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
              <BackgroundImage tag="section"
                style={{
                  color: `white`,
                  height: `100vh`,
                  width: `100%`,
                }}
                fluid={data.background.childImageSharp.fluid}
                backgroundColor={`#000`}
              >


                <div style={{ textAlign: `center` }}>
                  <h1 style={{ margin: `180px 0 0 0` }}>Bret Cameron</h1>
                  <h2 style={{
                    fontWeight: `200`,
                    fontSize: `1.4rem`,
                    letterSpacing: `2.5px`,
                    margin: `5px 0 100px 0`,
                    textTransform: `uppercase`
                  }}>Web Development</h2>
                </div>

                <div className="slider-container"
                  style={{
                    // background: `grey`, 
                    width: `100%`,
                  }}>
                  <BlogSlider />
                </div>


              </BackgroundImage>


              <div className="container">



                <h3 style={{
                  padding: `50px 0 15px 0`,
                  margin: `0`,
                  fontWeight: `bold`,
                  textTransform: `uppercase`,
                  // textAlign: `left`
                }}>Welcome</h3>
                <p style={{
                  margin: `15px 0`,
                  textAlign: `left`
                }}>I’m Bret, a web developer, designer and writer based in London, and this is the home of my blog and portfolio.</p>
                <p style={{
                  margin: `15px 0`,
                  textAlign: `left`
                }}>I'm currently available for freelance and contract work. If you'd like to get in touch, use <a href="#contact-me">the contact form at the bottom of this page.</a></p>
                <p style={{
                  margin: `15px 0`,
                  textAlign: `left`
                }}>I have experience with the following web development technologies:
                {/* <span style={{ fontStyle: `italic` }}>{this.state.techHover}</span> */}
                </p>
                <div style={{ textAlign: `left`, marginLeft: `-5px` }}>
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
                </div>
                <p style={{ height: `1rem`, fontStyle: `italic`, margin: `0 0 40px 0` }}>{this.state.techHover}</p>



              </div>{/* className="container"  */}



              {/* <BackgroundImage tag="section"
                style={{
                  // padding: `20px 0 0 0`,
                  color: `white`,
                  height: `auto`,
                  width: `100%`,
                  transformOrigin: `top left`,
                }}
                fluid={data.orange.childImageSharp.fluid}
                backgroundColor={`orange`}
              >
                <h3 style={{ margin: `15px 0` }}>Services</h3>
              </BackgroundImage> */}


              <h3 style={{
                padding: `50px 0 15px 0`,
                margin: `0`,
                fontWeight: `bold`,
                textTransform: `uppercase`,
                // textAlign: `left`
              }}>Services</h3>
              <div className="large-container">
                <div id="service-grid">

                  <BackgroundImage
                    style={{ color: `white` }}
                    fluid={data.designBG.childImageSharp.fluid}
                    backgroundColor={`#000`}
                  >
                    <Service
                      offset="20"
                      title="Design"
                      icon={data.design}
                      content="I design logos, static adverts for digital and print, as well as other branding content."
                    />
                  </BackgroundImage>


                  <BackgroundImage
                    style={{ color: `white` }}
                    fluid={data.webdevBG.childImageSharp.fluid}
                    backgroundColor={`#000`}
                  >
                    <Service
                      offset="0"
                      title="Web Development"
                      icon={data.webdev}
                      content="I develop lightning-fast, modern websites using React – a powerful technology developed by Facebook."
                    />
                  </BackgroundImage>

                  <BackgroundImage
                    style={{ color: `white` }}
                    fluid={data.writingBG.childImageSharp.fluid}
                    backgroundColor={`#000`}
                  >
                    <Service
                      offset="20"
                      title="Writing"
                      icon={data.writing}
                      content="I write articles and copy, and I'm also a top tech author on Medium."
                    />
                  </BackgroundImage>
                </div>
              </div>

              <div className="container">
                <br />
                <br />
                <h3 style={{
                  padding: `50px 0 15px 0`,
                  margin: `0`,
                  fontWeight: `bold`,
                  textTransform: `uppercase`,
                  // textAlign: `left`
                }}>Testimonials</h3>
                <p style={{ maxWidth: `600px`, margin: `0 auto 25px auto`, textAlign: `center` }}>I have been lucky enough to receive some very kind words about my work:</p>

                <div style={{ display: `flex`, justifyContent: `center` }} >
                  <Testimonial
                    quote="One of the most brilliant and hardworking people that I know. I've worked with Bret on several projects at Fanbytes and have been left impressed by his creativity, diligence and quality of work. More than often I've seen him take on a task and go above and beyond to complete it. He can be a real asset to a team!"
                    person="Miri Qylafi"
                    title="Partnerships Manager, Fanbytes"
                  />
                </div>


                <br />
                {/* <br /> */}
              </div>{/* className="container"  */}

              <BackgroundImage
                id="contact-me"
                tag="section"
                fluid={data.background2.childImageSharp.fluid}
                backgroundColor={`#000`}
              >
                <h3 style={{
                  padding: `0 0 40px 0`,
                  margin: `0`,
                  fontWeight: `bold`,
                  textTransform: `uppercase`,
                  // textAlign: `left`
                }}>Contact Me</h3>                <p style={{ maxWidth: `600px`, margin: `0 auto 50px auto` }}>Feel free to get in-touch via email or using the contact form below.</p>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />
                  <div className="form-grid">
                    <div>
                      <label htmlFor="name">Name</label>
                      <br />
                      <input type="text" name="name" id="name" />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <br />
                      <input type="text" name="email" id="email" />
                    </div>
                    <div id="message-grid">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <div>
                      <input type="submit" value="Send Message" className="special" />
                    </div>
                    <div>
                      <input id="form-reset" type="reset" value="Clear" />
                    </div>
                  </div>
                </form>
              </BackgroundImage>



            </div>
          </Layout>
        </>
      )} />
    )

  }
}

export default IndexPage
