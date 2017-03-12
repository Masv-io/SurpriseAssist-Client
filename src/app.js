import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView from './components/MapView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
