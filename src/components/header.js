import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  TICTACTOE
                </Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={ (text)=> this.setState({email: text}) }
                    style={styles.input}>
                  </TextInput>
                </View>
              </View>
              </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    width: null,
    height: null,
    backgroundColor: '#222d2f'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    alignSelf: 'center',
    width: 300,
    height: 80,
    top: 100,
  },
  inputBox: {
    alignSelf: 'center',
  },
  input: {
    height: 30,
    width: 200,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  text: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 14,
    color: '#e6e6e6'
  },
  largeText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 44,
    color: '#e6e6e6'
  }
});
// export default class Header extends Component {
//     render() {
//         return <View style={styles.container}>
//                  <Image
//                     style={styles.stretch}
//                     source={require('../assets/img/h.jpg')}
//                  />
//                 <Image
//                     style={styles.logo}
//                     source={require('../assets/img/logo.png')}
//                  />
//                 </View>
//     }
// }
// const styles = StyleSheet.create({
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 50,
//     },
//     container: {
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         alignSelf: 'stretch',
//         marginBottom: 50,
//         backgroundColor: '#CCC',
//     },
//     stretch: {
//         height: 100
//     },
//     logo: {
//         height: 50,
//         width: 50,
//         top: 0,
//         left: 70,
//         position: 'absolute'
//     }
// });