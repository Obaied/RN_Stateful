'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Stateful extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    this._clickMe = this._clickMe.bind(this);
  }

  _clickMe() {
    var newClick = this.state.clicks += 1;

    this.setState({
      clicks: newClick
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={this._clickMe}>
          <Text>{'Click Me'}</Text>
        </TouchableHighlight>
        <Text>
          {this.state.clicks}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
    backgroundColor:  'coral',
  }
});

AppRegistry.registerComponent('Stateful', () => Stateful);
