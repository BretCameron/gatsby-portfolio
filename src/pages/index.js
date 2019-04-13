import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TechIcon from "../components/TechIcon"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial"
import BackgroundImage from 'gatsby-background-image'

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
  }
`
      } render={(data) => (
        <>
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div style={{ textAlign: `center` }}>
              <BackgroundImage Tag="section"
                style={{
                  marginBottom: `40px`,
                  color: `white`,
                  height: `auto`,
                  width: `100%`,
                  transformOrigin: `top left`,
                }}
                fluid={data.background.childImageSharp.fluid}
                backgroundColor={`#000`}
              >

                <br />
                <br />

                <h1 style={{ margin: 0 }}>Bret Cameron</h1>
                <h2 style={{
                  fontWeight: `200`,
                  fontSize: `1.4rem`,
                  letterSpacing: `2.5px`,
                  margin: `5px 0 50px 0`,
                  textTransform: `uppercase`
                }}>Blog &amp; Portfolio</h2>

                <p style={{ maxWidth: `400px`, margin: `50px auto` }}>Welcome to my website! I’m a web developer, designer and writer based in London, and this is the home of my blog and portfolio.</p>
                <br />
              </BackgroundImage>


              <h3>Services</h3>
              <p style={{ maxWidth: `600px`, margin: `0 auto 25px auto` }}>I do freelance and contract work, mainly focusing on the following:</p>

              <div style={{ display: `flex`, flex: `1 1 0`, justifyContent: `center`, padding: `0 0 30px 0` }}>
                <Service
                  offset="20"
                  title="Design"
                  image={data.design}
                  content="I have experience creating logos, adverts for online and print, as well as other branding and marketing content."
                />
                <Service
                  offset="0"
                  title="Web Development"
                  image={data.webdev}
                  content="I'm experienced at developing front-end web experiences using React, Next.js and Gatsby. I also have experience using WordPress as a standalone or decoupled CMS."
                />
                <Service
                  offset="20"
                  title="Writing"
                  image={data.writing}
                  content="I have written for a number of brands and individuals, especially in the tech space. I'm also a top tech author on Medium."
                />
                {/* <div style={{ width: `300px`, padding: `0px 20px 50px 20px` }}>1.<br />Web<br />Development</div>
                <div style={{ width: `300px`, padding: `0px 20px 50px 20px` }}>2.<br />Design</div>
                <div style={{ width: `300px`, padding: `0px 20px 50px 20px` }}>3.<br />Writing</div> */}
              </div>


              <br />
              <br />



              <h3>Technologies</h3>
              <p style={{ maxWidth: `600px`, margin: `0 auto 25px auto` }}>I have experience with the following programming technologies:</p>

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


              <br />

              <h3>Testimonials</h3>
              <p style={{ maxWidth: `600px`, margin: `0 auto 25px auto` }}>I have been lucky enough to receive some very kind words about my work:</p>

              <div style={{ display: `flex`, justifyContent: `center` }} >
                <Testimonial
                  quote="One of the most brilliant and hardworking people that I know. I've worked with Bret on several projects at Fanbytes and have been left impressed by his creativity, diligence and quality of work. More than often I've seen him take on a task and go above and beyond to complete it. He can be a real asset to a team!"
                  person="Miri Qylafi"
                  title="Partnerships Manager, Fanbytes"
                />
              </div>


              <br />
              <br />


              <BackgroundImage
                id="contact-me"
                tag="Section"
                fluid={data.background.childImageSharp.fluid}
                backgroundColor={`#000`}
              >
                <h3>Contact Me</h3>
                <p style={{ maxWidth: `400px`, margin: `0 auto 50px auto` }}>Feel free to get in-touch via email or using the contact form below.</p>
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
