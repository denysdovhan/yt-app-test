import React, { PropTypes } from 'react'
import Video from './Video'

const History = ({ videos, onVideoClick }) => (
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
);

History.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onVideoClick: PropTypes.func.isRequired
}

export default History
