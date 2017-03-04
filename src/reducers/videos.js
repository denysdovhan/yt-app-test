// Toggle active Video
const toggleActive = (state = [], action) => {
  switch (action.type) {
    case 'PLAY_VIDEO':
      return state
        .map(video =>
          video.active
            ? Object.assign({}, video, { active: false })
            : video
        )
        .map(video =>
          action.id === video.id
            ? Object.assign({}, video, { active: true })
            : video
        )

    default:
      return state
  }
}

const videos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VIDEO':
      console.log(state)
      return [
        {
          id: action.id,
          url: action.url,
          active: true,
          picture: action.picture,
          videoId: action.videoId,
          title: action.title
        },
        ...state.map(v => v.active ? Object.assign({}, v, { active: false }) : v)
      ]
    case 'PLAY_VIDEO':
      state = toggleActive(state, action)
      return [
        ...state.filter(e => action.id === e.id),
        ...state.filter(e => action.id !== e.id)
      ]

    default:
      return state
  }
}

export default videos
