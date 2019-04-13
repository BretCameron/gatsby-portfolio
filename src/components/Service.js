import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <>
        <div className="service-container">
          <img style={{
            width: `40px`,
            margin: `15px 0 0 0`,
          }} src={this.props.icon.publicURL} alt="" />
          <h4 style={{
            padding: `20px 10px 0 10px`,
            fontStyle: `italic`,
            // color: `indigo`
          }}>{this.props.title}</h4>
          <p style={{
            padding: `10px`,
          }}>{this.props.content}</p>
        </div>
      </>
    )
  }
}


export default Service;