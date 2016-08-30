import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                  TicTacToe
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 50,
    marginBottom: 50,
  },
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