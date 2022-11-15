import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {logo} from '../../assets';

//class based component
export class Login extends Component {
  render() {
    return (
      <View style={styles.mainComponent}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.title}>Log-in</Text>
      </View>
    );
  }
}

// rns -> Shortcut
// Internal Stylesheet
const styles = StyleSheet.create({
  mainComponent: {
    flex: 1, // to capture the share in the given window
    // justifyContent: 'center', // vertical
    // alignItems: 'center', // horizontal
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
  },
});
export default Login;
