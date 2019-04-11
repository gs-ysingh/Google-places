import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import fetchPlaces from '../../libs/fetch-places';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = _.debounce(this.handleKeyPress, 250);
  }

  handleKeyPress(value) {
    this.props.fetchPlaces(value);
  }

  render() {
    return (
      <div className={styles['search-container']}>
        <input placeholder="Type pizza, biryani, coffee etc." onKeyPress={(e) => this.handleKeyPress(e.target.value)} className={styles['search-input']} type='text' />
      </div>
    )
  }
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