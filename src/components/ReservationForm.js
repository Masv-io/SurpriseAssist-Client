import React, { Component } from 'react';
import {
  DatePickerIOS,
  StyleSheet,
  View,
} from 'react-native';
import MapView from './MapView';
import { FormLabel, FormInput } from 'react-native-elements';
import moment from 'moment';
import { Button } from 'react-native-elements';

class ReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    };

    this._handleDateChange = this._handleDateChange.bind(this);
  }

  _handleDateChange(newDate) {
    this.setState({
      date: moment(newDate),
    });
  }

  _handleSubmit() {
    this.props.onSubmit(this.state.date);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView />
        <DatePickerIOS
        date={this.state.date.toDate()}
        mode="datetime"
        onDateChange={this._handleDateChange}
      />
      <Button
        title="Surprise me"
        onPress={this._handleSubmit.bind(this)}
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

export default ReservationForm;
