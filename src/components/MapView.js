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
  }

  render() {
    return (
      <View style={styles.container}>
        <RNMapView
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          initialRegion={{
            latitude: this.props.coordinates.lat,
            longitude: this.props.coordinates.long,
          }}
        />
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
    lat: React.PropTypes.number.isRequired,
    long: React.PropTypes.number.isRequired,
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
