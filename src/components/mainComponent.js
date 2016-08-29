/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './login';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

export default class Tictactoe extends Component {
  onPress(elememnt) {
    console.log('here am i')
  }
  render() {
    let TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    return (
      <View style={styles.container} shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}>
        <Text style={styles.welcome}>
          SEB
        </Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  }
});
