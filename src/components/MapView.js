import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Container } from 'native-base';
import * as actions from '../actions';
import RNMapView from 'react-native-maps';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        latitude: this.props.coordinates.latitude,
        longitude: this.props.coordinates.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };

    this._handleRegionChange = this._handleRegionChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentLocation();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      center: {
        ...nextProps.coordinates,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }
    });
  }

  _handleRegionChange(region) {
    this.setState({
      center: region,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNMapView
          onRegionChange={this._handleRegionChange}
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
