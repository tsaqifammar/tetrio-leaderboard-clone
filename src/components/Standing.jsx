import React from 'react';
import PropTypes from 'prop-types';

function Standing({ title, place }) {
  return (
    <div className="standing">
      <p className="standing-title">{title}</p>
      <p>
        #
        <span className="standing-place">{place}</span>
      </p>
    </div>
  );
}

Standing.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.number.isRequired,
};

export default Standing;
