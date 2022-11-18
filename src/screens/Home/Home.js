import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {logo} from '../../assets';

export class Home extends Component {
  DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

  // function abc(params) {
  //   console.log(params);
  // }

  // abc(120)

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.DATA}
          renderItem={function (item) {
            console.log(item);
            return (
              <View>
                <Image style={styles.logo} source={logo} />
                <Text style={{fontSize: 30}}>{item.item.title}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Home;
