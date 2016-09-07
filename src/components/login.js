import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage,
  Text,
  View
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
const ACCESS_TOKEN = 'access_token';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      showProgress: false,
    }
  }
  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }
  storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }
  async onLoginPressed() {
    this.setState({showProgress: true})
    // try {
    //   let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/login', {
    //                           method: 'POST',
    //                           headers: {
    //                             'Accept': 'application/json',
    //                             'Content-Type': 'application/json',
    //                           },
    //                           body: JSON.stringify({
    //                             session:{
    //                               email: this.state.email,
    //                               password: this.state.password,
    //                             }
    //                           })
    //                         });
    //   let res = await response.text();
    //   if (response.status >= 200 && response.status < 300) {
    //       //Handle success
    //       let accessToken = res;
    //       console.log(accessToken);
    //       //On success we will store the access_token in the AsyncStorage
    //       this.storeToken(accessToken);
    //       this.redirect('home');
    //   } else {
    //       //Handle error
    //       let error = res;
    //       throw error;
    //   }
    // } catch(error) {
    //     this.setState({error: error});
    //     console.log("error " + error);
    //     this.setState({showProgress: false});
    // }
  }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={ (text)=> this.setState({email: text}) }
            style={styles.input}
            placeholder="Username">
          </TextInput>
        </View>
        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Start
          </Text>
        </TouchableHighlight>

        <Text style={styles.error}>
          {this.state.error}
        </Text>
        <Spinner style={styles.loader} visible={this.state.showProgress} hidesWhenStopped={true} size="large" color={'#60cd18'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    width: 320,
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
  },
  inputBox: {
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#60cd18'
  },
  button: {
    height: 50,
    backgroundColor: '#60cd18',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  loader: {
    marginTop: 20
  }
});
