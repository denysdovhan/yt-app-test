import { connect } from 'react-redux'
import ActiveVideo from '../components/ActiveVideo'

const mapStateToProps = (state) => ({
  url: state.length ? state[0].url : ''
})

const ShowActive = connect(
  mapStateToProps
)(ActiveVideo)

export default ShowActive
