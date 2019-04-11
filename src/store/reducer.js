import * as actions from './actions';

const initialState = {
  loading: false,
  results: [],
  map: {
    title: 'Map',
    name: 'Bengaluru',
    position: { lat: 12.971599, lng: 77.594566 },
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_SEARCH_RESULTS:
      return { ...state, loading: true };
    case actions.RECEIVE_SEARCH_RESULTS:
      return { ...state, results: action.data.results, loading: false };
    case actions.FAIL_SEARCH_RESULTS:
      return { ...state, results: [], loading: false };
    case actions.SET_LOCATION:
      return { ...state,  map: {
        position: action.data.location,
        name: action.data.name,
        title: action.data.title
      }};
    default:
      return state;
  }
}

export default reducer;