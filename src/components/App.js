import React from 'react'
import ShowActive from '../containers/ShowActive'
import SortHistory from '../containers/SortHistory'
import SearchForm from '../containers/SearchForm'
import '../styles/main.css'

const App = () => (
  <div className="Wrap">
    <div className="SearchForm">
      <SearchForm />
    </div>
    <div className="ActiveVideo">
      <ShowActive />
    </div>
    <div className="History">
      <SortHistory />
    </div>
  </div>
);

export default App
