import React, { Component } from 'react'
import ShowActive from '../containers/ShowActive'
import SortHistory from '../containers/SortHistory'
import AddVideo from '../containers/AddVideo'
import '../styles/main.css'

class App extends Component {
  render() {
    return (
      <div className="Wrap">
        <div className="AddVideo">
          <AddVideo />
        </div>
        <div className="ActiveVideo">
          <ShowActive />
        </div>
        <div className="History">
          <SortHistory />
        </div>
      </div>
    )
  }
}

export default App
