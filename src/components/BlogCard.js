import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techHover: '' }
  }

  render() {
    return (
      <StaticQuery query={ /* GraphQL */
        graphql`{
          bigonotation:file(relativePath:{eq:"blog-posts/big-o-notation.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          }
          }
          csstricks:file(relativePath:{eq:"blog-posts/css-tricks.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          }
          }
          gatsbyimage:file(relativePath:{eq:"blog-posts/gatsby-image.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          }
          }
          googleinterview:file(relativePath:{eq:"blog-posts/google-interview.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          }
          }     
          headlesscms:file(relativePath:{eq:"blog-posts/headless-cms.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          howistarted:file(relativePath:{eq:"blog-posts/how-i-started.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          html:file(relativePath:{eq:"blog-posts/html.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          javascriptcpp:file(relativePath:{eq:"blog-posts/javascript-cpp.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          javascriptsets:file(relativePath:{eq:"blog-posts/javascript-sets.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          javascripttricks:file(relativePath:{eq:"blog-posts/javascript-tricks.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          reactjquery:file(relativePath:{eq:"blog-posts/react-jquery.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          technicalseo:file(relativePath:{eq:"blog-posts/technical-seo.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          vscode1:file(relativePath:{eq:"blog-posts/vscode1.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          vscode2:file(relativePath:{eq:"blog-posts/vscode2.jpeg"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
          wordpressreact:file(relativePath:{eq:"blog-posts/wordpress-react.png"}) {
          childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }           
          }
          }
        }`
      } render={(data) => (
        <>
          <div style={{
            transition: `300ms ease-in-out`,
            margin: `10px 1px`,
            width: `300px`,
            minWidth: `300px`,
            // boxShadow: `1px 1px 5px rgba(0,0,0,0.5)`,
            borderRadius: `5px`,
            opacity: this.props.opacity,
          }}>
            <Img style={{
              overflow: `none`,
              margin: 0,
              width: `100%`,
              height: `160px`,
              objectFit: `cover`,
            }}
              fluid={data[this.props.query].childImageSharp.fluid}
              alt={this.props.title}
              className="blog-img" />
            <i style={{
              display: `inline-block`,
              padding: `10px`,
              margin: `0`
            }}>{this.props.date} • {this.props.readTime}</i>
            <h3 style={{
              padding: `10px 0 30px 0`
            }}>{this.props.title}</h3>
          </div>
        </>
      )} />
    )

  }
}

export default BlogCard