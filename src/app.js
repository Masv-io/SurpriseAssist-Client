import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SearchForm from './components/search-form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchForm />
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
