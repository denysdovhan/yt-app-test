import React, { Component } from 'react'

class ActiveVideo extends Component {
  render() {
    const { url } = this.props
    return (
      <iframe
        width="420"
        height="315"
        src={url}>
      </iframe>
    )
  }
}

export default ActiveVideo
