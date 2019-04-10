import * as actions from '../store/actions';

const setLocation = (location) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_LOCATION, location: location });
  }
};

export default setLocation;