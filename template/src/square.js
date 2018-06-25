import React from 'react';
import { string, func } from 'prop-types';
import styles from './index.css';

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
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
