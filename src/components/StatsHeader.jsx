import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
function StatsHeader({ rankLetter, rating, glicko, rd, rankGlobal, rankLocal }) {
  return (
    <div className="header-stats">
      <h1>{`${rankLetter}, ${rating}, ${glicko}, ${rd}, ${rankGlobal}, ${rankLocal}`}</h1>
    </div>
  );
}

StatsHeader.defaultProps = {
  rankLetter: 'unknown',
};

StatsHeader.propTypes = {
  rankLetter: PropTypes.string,
  rating: PropTypes.number.isRequired,
  glicko: PropTypes.number.isRequired,
  rd: PropTypes.number.isRequired,
  rankGlobal: PropTypes.number.isRequired,
  rankLocal: PropTypes.number.isRequired,
};

export default StatsHeader;
