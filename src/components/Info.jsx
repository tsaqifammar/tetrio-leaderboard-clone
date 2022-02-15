import React from 'react';
import PropTypes from 'prop-types';

function Info({ name, value, extra }) {
  return (
    <div className="info">
      <p className="info-name">{name}</p>
      <p className="info-value">{value}</p>
      <p className="info-extra">{extra}</p>
    </div>
  );
}

Info.defaultProps = {
  extra: '',
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  extra: PropTypes.string,
};

export default Info;
