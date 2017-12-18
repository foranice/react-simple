import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hello from '../components/hello/hello.jsx';
import { ADD_MESSAGE } from '../actions/index';
import logo from '../assets/logo.jpg';
import './App.scss';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return { addmessage: state.addmessage };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ADD_MESSAGE,
      },
      dispatch,
    ),
  };
}


class App extends React.Component {
  render() {
    return <div id="app-page">
      <img src={logo} />
      <Hello actions={this.props.actions} addmessage={this.props.addmessage}> </Hello>
    </div>;
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  addmessage: PropTypes.object,
};

/**
 * 通过connect 链接 Redux store. 统一分发 state 和 actions.
 * 实际这里应该传入一个根组件. 通过根组件分发
 * */
// ES7 Decorators简化版
// @connect(mapStateToProps, mapDispatchToProps )
// export default class hello{}

const app = connect(mapStateToProps, mapDispatchToProps)(App);
export default app;
