import React from "react"
import Img from "gatsby-image"

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="service"
        style={{
          width: `700px`,
          minWidth: `150px`,
          padding: `5px 20px 0 20px`,
          margin: `5px`,
          marginBottom: `50px`,
          boxShadow: `2px 2px 5px lightgray`,
          borderRadius: `3px`,
          transform: `translateY(${this.props.offset}px)`
        }
        }>
        <p style={{ padding: `30px 15px 0px 15px` }}>
          <q>{this.props.quote}</q>
        </p>
        <h4 style={{ margin: `0`, paddingTop: `10px` }}>{this.props.person}</h4>
        <h4 style={{ fontWeight: `200`, padding: `5px 0 0 0` }}>{this.props.title}</h4>
      </div >
    )
  }
}

export default Testimonial;