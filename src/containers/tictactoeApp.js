import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Tictactoe from '../components/mainComponent';
import * as tictactoeActions from '../actions/tictactoeActions';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// @connect(state => ({
//   state: state.counter
// }))
class TictactoeApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Tictactoe />
    );
  }
}

export default connect(state => ({
    state: state.counter,
  }),
  (dispatch) => ({
    actions: bindActionCreators(tictactoeActions, dispatch)
  })
)(TictactoeApp);