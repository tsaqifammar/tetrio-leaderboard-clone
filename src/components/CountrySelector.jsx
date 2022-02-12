import React from 'react';
import PropTypes from 'prop-types';
import countries from '../data/country_names.json';

function CountrySelector({ country, onChangeHandler }) {
  return (
    <label htmlFor="country">
      Country
      <select value={country} onChange={(e) => onChangeHandler(e.target.value)}>
        <option value="">All Countries</option>
        {
          Object.entries(countries).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))
        }
      </select>
    </label>
  );
}

CountrySelector.propTypes = {
  country: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default CountrySelector;
