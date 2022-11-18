import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import {logo} from '../../assets';

//class based component
export class Login extends Component {
  componentDidMount() {
    setTimeout(() => {
      alert('Hi there');
    }, 5000);
  }

  componentWillUnmount() {
    console.log('Ok bye bye tata');
  }

  printOnConsole() {}

  render() {
    return (
      <ScrollView>
        <View style={styles.mainComponent}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={logo} />
          </View>
          <Text style={styles.title}>Log-in</Text>

          <Text style={styles.label}>Email</Text>

          <TextInput placeholder="Your email ID" style={styles.input} />

          <Text style={styles.label}>Password</Text>

          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.loginWrapper}
            onPress={this.printOnConsole}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// rns -> Shortcut
// Internal Stylesheet
const styles = StyleSheet.create({
  mainComponent: {
    flex: 1, // to capture the share in the given window
    // // justifyContent: 'center', // vertical
    // // alignItems: 'center', // horizontal
    margin: 16,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginTop: 40,
  },
  input: {
    margin: 8,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: 'grey',
  },

  loginWrapper: {
    marginTop: 60,
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 80,
    backgroundColor: 'rgb(40, 20, 120)',
    alignSelf: 'center',
  },
  loginButton: {
    color: 'white',
    fontSize: 18,
  },
});
export default Login;
