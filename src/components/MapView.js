import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import * as actions from '../actions';
import RNMapView from 'react-native-maps';

const defaultCoordinateDeltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        latitude: this.props.coordinates.latitude,
        longitude: this.props.coordinates.longitude,
        ...defaultCoordinateDeltas,
      },
    };

    this._handleRegionChange = this._handleRegionChange.bind(this);
    this._updateCurrentLocation = this._updateCurrentLocation.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrentLocation();
  }

  componentDidMount() {
    this.mapView.animateToCoordinate({
      latitude: this.state.center.latitude,
      longitude: this.state.center.longitude,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      center: {
        ...nextProps.coordinates,
        ...defaultCoordinateDeltas,
      }
    });
  }

  _handleRegionChange(region) {
    this.setState({
      center: region,
    });
  }

  _updateCurrentLocation(region) {
    this.props.setCurrentLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNMapView
          ref={elem => this.mapView = elem}
          onRegionChange={this._handleRegionChange}
          onRegionChangeComplete={this._updateCurrentLocation}
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          region={this.state.center}
        >
          <RNMapView.Marker
            coordinate={this.state.center}
          />
        </RNMapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

MapView.propTypes = {
  coordinates: React.PropTypes.shape({
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    coordinates: state.location.coordinates,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
