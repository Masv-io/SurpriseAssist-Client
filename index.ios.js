import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './src/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

class SurpriseAssist extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SurpriseAssist', () => SurpriseAssist)
