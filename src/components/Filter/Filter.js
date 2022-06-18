import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter, onFilter }) {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
