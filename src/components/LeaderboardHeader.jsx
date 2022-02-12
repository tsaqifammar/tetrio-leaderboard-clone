import React from 'react';
import countries from '../data/country_names.json';

function CountrySelector() {
  return (
    <label htmlFor="country">
      Country
      <select name="country" id="country">
        {
          Object.entries(countries).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))
        }
      </select>
    </label>
  );
}

export default CountrySelector;
