import React, { Component } from 'react'
import Hello from '../containers/hello'
import SearchMusic from '../containers/searchmusic'
import logo from '../assets/logo.jpg'
import './demo.scss'

class demo extends Component {
  render() {
    return <div id="app-page">
      <img src={logo} />
      <Hello > </Hello>
      <SearchMusic></SearchMusic>
    </div>
  }
}
export default demo
