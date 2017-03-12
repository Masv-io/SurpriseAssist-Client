import { combineReducers } from 'redux';
import { SET_LOCATION, SET_PENDING_RESERVATION } from './../actions'
import moment from 'moment';

const initialLocationState = {
  coordinates: {
    latitude: 37.782256,
    longitude: -122.391273,
  },
};

const location = (state = initialLocationState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state, {
        coordinates: action.data,
      });
    default:
      return state;
  }
};

const initialReservationState = {
  pendingReservation: null,
};

const reservation = (state = initialReservationState, action) => {
  switch (action.type) {
    case SET_PENDING_RESERVATION:
      return Object.assign({}, state, {
        pendingReservation: action.data,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  location,
  reservation,
});

export default rootReducer;
