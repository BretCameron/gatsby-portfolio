import React from "react"
import Img from "gatsby-image"

class TechIcon extends React.Component {
  constructor(props) {
    super(props);
  }


  populateImage = () => {
    if (/.svg$/.test(this.props.image.publicURL)) {
      return (
        <img className="tech-icon" id={this.props.title} onMouseOver={this.props.onMouseEnter} onMouseOut={this.props.onMouseLeave}
          style={{ width: `50px`, height: `50px`, padding: `0 5px` }}
          src={this.props.image.publicURL} alt={this.props.title}
        />
      )
    } else {
      if (this.props.image.childImageSharp) {
        return (
          <div className="tech-icon" id={this.props.title} onMouseOver={this.props.onMouseEnter} onMouseOut={this.props.onMouseLeave}
            style={{ width: `50px`, height: `50px`, padding: `0 5px`, display: `inline-block`, transform: `translateY(-25px)` }}>
            <Img fluid={this.props.image.childImageSharp.fluid} alt={this.props.title}
            />
          </div>
        )
      }
    }
  }

  render() {
    return (
      <div className="tech-icon" style={{ display: 'inline-block' }}>
        {this.populateImage()}
      </div >
    )
  }
}

export default TechIcon;