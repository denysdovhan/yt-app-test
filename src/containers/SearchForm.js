import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUrl } from '../actions'

class SearchForm extends Component {
  render() {
    const { input } = this.props
    return (
      <div>
        <form onSubmit={e => this._submitSearchQuery(e)}>
          <input ref={node => this.input = node}/>
          <button type="submit">Play</button>
        </form>
      </div>
    )
  }

  _submitSearchQuery(event) {
    const { dispatch } = this.props

    event.preventDefault()
    if (!this.input.value.trim()) return

    dispatch(fetchUrl(this.input.value))
    this.input.value = ''
  }
}

export default connect()(SearchForm)
