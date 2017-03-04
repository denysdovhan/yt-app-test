import React, { PropTypes, Component } from 'react'

class Video extends Component {
  render() {
    const { onClick, title, active, picture } = this.props
    return (
      <li
        onClick={onClick}
        className={active ? 'active' : ''}
      >
        <img
          alt="Preview"
          src={picture}
        />
        <h2>
          {title}
        </h2>
      </li>
    )
  }
}

Video.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}

export default Video
