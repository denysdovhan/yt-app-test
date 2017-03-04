import { connect } from 'react-redux'
import ActiveVideo from '../components/ActiveVideo'

const mapStateToProps = (state) => {
  return {
    url: state.videos.length ? state.videos[0].url : ''
  }
}

const ShowActive = connect(
  mapStateToProps
)(ActiveVideo)

export default ShowActive
