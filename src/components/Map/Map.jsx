import React, { Component } from "react";
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Map.module.css';
 
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.props.position}
      >
        <Marker
          title={this.props.title}
          name={this.props.name}
          position={this.props.position} />
      </Map>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.map.title,
    name: state.map.name,
    position: state.map.position,
  };
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDMoSs04VzZlNEzy552qokfOugQJ3j-7CY'
})(connect(mapStateToProps)(MapContainer));