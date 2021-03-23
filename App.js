
import React, { Component } from 'react';
import { Animated, StyleSheet, View, } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(0),
    }


    Animated.timing(
      this.state.largura, {
      toValue: 100,
      duration: 17000,
      useNativeDriver: false,
    }
    ).start();

  }


  render() {
    let response = this.state.largura.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    return (

      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: 'blue',
          width: response,
          height: 50,
        }}>
        </Animated.View>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  
  },

});

