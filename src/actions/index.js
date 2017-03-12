export const SET_LOCATION = 'SET_LOCATION';

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
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      }));
    });
  };
};
