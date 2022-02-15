import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  children: '',
};

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
