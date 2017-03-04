import React from 'react'
import { connect } from 'react-redux'
import { fetchUrl } from '../actions'

const AddVideo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim())
          return

        dispatch(fetchUrl(input.value))
        input.value = ''
      }}>
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Play
        </button>
      </form>
    </div>
  )
}

export default connect()(AddVideo)
