import React, { PropTypes, Component } from 'react'
import Video from './Video'

class History extends Component {
  render() {
    const { videos, onVideoClick } = this.props
    return (
      <ul>
        {videos.map(video =>
          <Video
            key={video.id}
            url={video.url}
            picture={video.picture}
            title={video.title}
            active={video.active}
            onClick={() => onVideoClick(video.id)}
          />
        )}
      </ul>
    )
  }
}

History.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onVideoClick: PropTypes.func.isRequired
}

export default History
