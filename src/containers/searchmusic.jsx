import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import searchView from '../components/hello/searchmusic.jsx'
import { SEARCH_MUSIC } from '../actions/index'

function mapStateToProps(state) {
  return {
    searchres: state.searchmusic.searchres,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        SEARCH_MUSIC,
      },
      dispatch,
    ),
  }
}

/**
 * 通过connect 链接 Redux store. 统一分发 state 和 actions.
 * 实际这里应该传入一个根组件. 通过根组件分发
 * */
// ES7 Decorators简化版
// @connect(mapStateToProps, mapDispatchToProps )
// export default class hello{}

const searchmusic = connect(mapStateToProps, mapDispatchToProps)(searchView)
export default searchmusic
