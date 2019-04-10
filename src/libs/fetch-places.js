import * as actions from '../store/actions';

const fetchPlaces = (str) => {
  return (dispatch, getState) => {
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const location = '12.971599,77.594566';
    const radius = '1500';
    const type = 'restaurant';
    const keyword = str;
    const apiKey = 'AIzaSyDMoSs04VzZlNEzy552qokfOugQJ3j-7CY';
    const requestUrl = `${apiUrl}?location=${location}&radius=${radius}&type=${type}&keyword=${keyword}&key=${apiKey}`;
    dispatch({ type: actions.FETCH_SEARCH_RESULTS });
    return fetch(requestUrl)
      .then((resp) => resp.json()) 
      .then((res) => {
        dispatch({ type: actions.RECEIVE_SEARCH_RESULTS, data: res });
      })
      .catch(() => {
        dispatch({ type: actions.FAIL_SEARCH_RESULTS });
      });
  }
}

export default fetchPlaces;