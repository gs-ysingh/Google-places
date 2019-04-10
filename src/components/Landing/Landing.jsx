import React from "react";
import Search from '../../components/Search/Search.jsx';
import Listing from "../../components/Listing/Listing.jsx";
import GoogleApiWrapper from "../../components/Map/Map.jsx";
import styles from './Landing.module.css';


const Landing = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <Search />
      </div>
      <div className={styles.content}>
        <Listing />
        <GoogleApiWrapper />
      </div>
    </div>
  );
}

export default Landing;