import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ReservationScreen from './containers/ReservationScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ReservationScreen />
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
