import React from "react";
import { connect } from 'react-redux';
import Search from '../../components/Search/Search.jsx';
import Listing from "../../components/Listing/Listing.jsx";
import GoogleApiWrapper from "../../components/Map/Map.jsx";
import styles from './Landing.module.css';


const Landing = (props) => {
  const renderImage = () => {
    return (
      <img className={styles.loading} src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" />
    );
  }

  return (
    <div>
      <div className={styles.header}>
        <Search />
      </div>
      <div className={styles.content}>
        <Listing />
        <GoogleApiWrapper />
        {props.loading && renderImage()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(Landing);