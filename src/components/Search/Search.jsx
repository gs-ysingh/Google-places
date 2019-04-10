import React from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import fetchPlaces from '../../libs/fetch-places';

const Search = ({ fetchPlaces }) => {
  const getLocation = (e) => {
    if(e.target.value && e.target.value.length > 3) {
      fetchPlaces(e.target.value);
    }
  };
  
  return (
    <div className={styles['search-container']}>
      <input placeholder="Type pizza, biryani, coffee etc." onKeyPress={getLocation} className={styles['search-input']} type='text' />
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  fetchPlaces(str) {
    dispatch(fetchPlaces(str));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Search);