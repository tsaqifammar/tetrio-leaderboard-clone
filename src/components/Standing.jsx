import React from 'react';
import PropTypes from 'prop-types';

function Standing({ title, place }) {
  return (
    <div>
      <h1 className="important place-title">{title}</h1>
      <p>
        {'# '}
        <span className="important">{place}</span>
      </p>
    </div>
  );
}

Standing.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.number.isRequired,
};

export default Standing;
