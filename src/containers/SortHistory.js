import { connect } from 'react-redux'
import { playVideo } from '../actions'
import History from '../components/History'

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoClick: (id) => {
      dispatch(playVideo(id))
    }
  }
}

const SortHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default SortHistory
