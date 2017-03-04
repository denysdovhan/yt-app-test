let nextVideoId = 0

export const addVideo = ({ url, videoId, picture, title }) => {
  return {
    type: 'ADD_VIDEO',
    id: nextVideoId++,
    active: true,
    videoId,
    picture,
    title,
    url
  }
}

export const playVideo = (id) => {
  return {
    type: 'PLAY_VIDEO',
    id
  }
}

const getVideoId = url => url.match(/[A-Za-z0-9_-]*$/g)
const correctUrl = url => url.replace(/\/watch\?v=/g, '/embed/').concat('?autoplay=1')

export const fetchUrl = (url) => (dispatch) => {
  const apiKey = 'AIzaSyAcb9Ws-PMUkHAEwUCy5PUK7M3iFeoN1SU'
  const videoId = getVideoId(url)
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoId}&key=${apiKey}`)
      .then(res => res.json())
      .then(json => {
        url = correctUrl(url)
        const picture = json.items[0].snippet.thumbnails.high.url
        const title = json.items[0].snippet.title
        return dispatch(addVideo({ url, videoId, picture, title }))
      }
    )
}
