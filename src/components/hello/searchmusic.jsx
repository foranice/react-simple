import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './searchmusic.scss'

class SearchMusic extends Component {
  constructor() {
    super()
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleCommit = this.handleCommit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleCommit() {
    this.props.actions.SEARCH_MUSIC(this.state.value)
  }
  render() {
    return (
      <div className="searchMusic" >
        <div className="input">
      <input style={{ border: '1px solid skyblue' }}
        onChange={this.handleChange }
      >
      </input ><span className="button" onClick={this.handleCommit} >提交</span>
        </div>
        <ul>
          {this.props.searchres.map(song => <li key={song.id} >{song.songname}</li>)}
        </ul>
      </div>
    )
  }
}

SearchMusic.propTypes = {
  actions: PropTypes.object.isRequired,
  searchres: PropTypes.array,
}

export default SearchMusic
