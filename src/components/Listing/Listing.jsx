import React from "react";
import { connect } from 'react-redux';
import setLocation from '../../libs/setLocation';
import styles from './Listing.module.css';

export const Listing = (props) => {
  const renderItems = (results) => {
    if(results.length === 0) {
      return <div className={styles.noresults}>No Results found. Please change your filter</div>
    }
    return results.map((res, index) => {
      return (
        <div onClick={(e) => {
          props.setLocation(res.geometry.location, res.name, res.vicinity);
        }} className={styles.item} key={index}>
          <div className={styles.title}>
            {res.name}
          </div>
          <div>
            <span className={styles.rating}>
              {res.rating} ({res.user_ratings_total})
            </span>
          </div>
          <div className={styles.vicinity}>
            {res.vicinity}
          </div>
        </div>
      );
    });
  }

  return (
    <div className={styles.listing}>
      {props.results && renderItems(props.results)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
    loading: state.loading,
  };
}

export const mapDispatchToProps = dispatch => ({
  setLocation(location, name, title) {
    dispatch(setLocation(location, name, title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);