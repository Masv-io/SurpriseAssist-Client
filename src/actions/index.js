import axios from 'axios';
import moment from 'moment';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_PENDING_RESERVATION = 'SET_PENDING_RESERVATION';

const apiUrl = 'https://lpdi18h8s8.execute-api.us-east-1.amazonaws.com/dev';

const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    data: location,
  };
}

export function fetchCurrentLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(pos => {
      dispatch(setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  };
};

const setPendingReservation = (reservation) => {
  return {
    type: SET_PENDING_RESERVATION,
    data: reservation,
  };
}

const dateFormat = 'YYYY-MM-DD’T’HH:mm:ss';

export function requestReservation(coordinates, date) {
  return dispatch => {
    const formattedDate = encodeURIComponent(moment(date).format(dateFormat));
    const url = `${apiUrl}/reservations/surprise?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&start_date_time=&${formattedDate}`;
    axios.get(url).then(res => {
      dispatch(setPendingReservation(res));
    });
  };
};
