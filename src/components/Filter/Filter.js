import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { filter, onFilter } = this.props;
    return (
      <>
        <p className={s.text}> Find contacts by name </p>
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={onFilter}
          value={filter}
        ></input>
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
