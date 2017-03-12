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
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  };
};
