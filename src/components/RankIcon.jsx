import React from 'react';
import PropTypes from 'prop-types';

function RankIcon({ rank, size }) {
  return (
    <span className={`rank rank-${rank[0]} rank-${size}`}>
      {rank === 'unknown' ? '?' : rank}
    </span>
  );
}

RankIcon.defaultProps = {
  rank: 'unknown',
};

RankIcon.propTypes = {
  rank: PropTypes.string,
  size: PropTypes.string.isRequired,
};

export default RankIcon;
