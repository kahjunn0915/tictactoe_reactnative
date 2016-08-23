import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import Counter from '../components/counter';
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
      <View style={{flex: 1}}>
       <Text>Blah blah blah</Text>
      </View>
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