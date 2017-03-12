import { combineReducers } from 'redux';
import { SET_LOCATION } from './../actions'

const location = (state = {}, action) => {
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
