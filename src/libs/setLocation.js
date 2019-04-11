import * as actions from '../store/actions';

const setLocation = (location, name, title) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_LOCATION, data: {
      location: location,
      name: name,
      title: title
    } });
  }
};

export default setLocation;