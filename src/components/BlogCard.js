import React from "react"
// import Img from "gatsby-image"

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techHover: '' }
  }

  render() {
    return (
      <>
        <div style={{
          margin: `10px 1px`,
          maxWidth: `300px`,
          boxShadow: `1px 1px 5px rgba(0,0,0,0.5)`,
          borderRadius: `5px`
        }}>
          <img style={{
            overflow: `none`,
            margin: 0,
            width: `100%`,
            height: `160px`,
            objectFit: `cover`,
          }} src={this.props.image} alt={this.props.title} className="blog-img" />
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
    )
  }
}

export default BlogCard