import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import * as actions from '../actions';

class ReservationScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentLocation();
  }

  render() {
    return (
      <Container>
        <Text></Text>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coordinates: state.location.coordinates,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationScreen);
