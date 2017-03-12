import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import * as actions from '../actions';
import MapView from '../components/MapView';
import ReservationForm from '../components/ReservationForm';
import {
  View,
  StyleSheet,
} from 'react-native';

class ReservationScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentLocation();
  }

  _requestReservation(date) {
    this.props.requestReservation(this.props.coordinates, date);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView />
        <ReservationForm onSubmit={this._requestReservation.bind(this)} />
      </View>
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
