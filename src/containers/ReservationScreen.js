import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import * as actions from '../actions';
import ReservationForm from '../components/ReservationForm';
import {
  Navigator,
  StyleSheet,
} from 'react-native';

class ReservationScreen extends Component {
  constructor(props) {
    super(props);

    this._requestReservation = this._requestReservation.bind(this);
    this._renderScene = this._renderScene.bind(this);

    this._routes = {
      ReservationForm: {
        component: ReservationForm,
        props: {
          onSubmit: this._requestReservation,
        },
      },
    };
  }

  componentDidMount() {
    this.props.fetchCurrentLocation();
  }

  _initialRouteStack() {
    return [
      this._routes.ReservationForm,
    ];
  }

  _renderScene(route, nav) {
    let props = Object.assign({}, route.props);
    let Component = route.component;

    return <Component
      {...props}
      navigator={nav}
    />
  }

  _requestReservation(date) {
    this.props.requestReservation(this.props.coordinates, date);
  }

  render() {
    return (
      <Navigator
        initialRouteStack={this._initialRouteStack()}
        renderScene={this._renderScene}
        sceneStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    coordinates: state.location.coordinates,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationScreen);
