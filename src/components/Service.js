import React from "react"
import Img from "gatsby-image"

class TechIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="service"
        style={{
          // width: `250px`,
          // minWidth: `150px`,
          // padding: `5px 5px 0 5px`,
          // margin: `5px`,
          // marginBottom: `50px`,
          // boxShadow: `2px 2px 5px lightgray`,
          // borderRadius: `3px`,
          // marginTop: `${this.props.offset}px`,
          // marginBottom: `-${this.props.offset}px`,
        }
        }>
        <div className="service-container">
          <img style={{
            width: `40px`,
            margin: `15px 0 0 0`,
          }} src={this.props.image.publicURL} alt="" />
          <h4 style={{
            padding: `20px 10px 0 10px`,
            fontStyle: `italic`,
            // color: `indigo`
          }}>{this.props.title}</h4>
          <p style={{
            padding: `10px`,
          }}>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default TechIcon;