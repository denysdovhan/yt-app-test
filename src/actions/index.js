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

export const fetchUrl = (searhQuery) => (dispatch) => {
  const apiKey = 'AIzaSyAcb9Ws-PMUkHAEwUCy5PUK7M3iFeoN1SU'
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searhQuery}&key=${apiKey}`)
      .then(res => res.json())
      .then(json =>
        json.items.filter(item => item.id.kind === 'youtube#video')[0]
      )
      .then(({ id, snippet }) => {
        const picture = snippet.thumbnails.high.url
        const title = snippet.title
        const videoId = id.videoId

        return dispatch(addVideo({
          url: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
          videoId,
          picture,
          title,
        }));
      })
}
