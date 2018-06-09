import React from 'react';
import { string, func } from 'prop-types';

// eslint-disable-next-line no-use-before-define
Square.propTypes = {
  onClick: func.isRequired,
  value: string,
};

// eslint-disable-next-line no-use-before-define
Square.defaultProps = {
  value: '',
};

function Square({ onClick, value = '' }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
