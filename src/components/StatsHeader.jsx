import React from 'react';
import PropTypes from 'prop-types';
import RankIcon from './RankIcon';
import Standing from './Standing';

// eslint-disable-next-line object-curly-newline
function StatsHeader({ rankLetter, rating, glicko, rd, rankGlobal, rankLocal }) {
  return (
    <div className="header-stats">
      <div className="header-left">
        <RankIcon rank={rankLetter} size="xl" />
        <div>
          <h1>
            <span className="important">{rating}</span>
            {' '}
            TR
          </h1>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <p>Glicko: {glicko} &#177; {rd}</p>
        </div>
      </div>
      <div className="header-right">
        <Standing title="global" place={rankGlobal} />
        {rankLocal !== -1
          ? <Standing title="country" place={rankLocal} />
          : ''}
      </div>
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
