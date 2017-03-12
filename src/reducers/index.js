import { combineReducers } from 'redux';
import { SET_LOCATION } from './../actions'

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

const rootReducer = combineReducers({
  location,
});

export default rootReducer;
