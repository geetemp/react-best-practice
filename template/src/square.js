import React from "react";
import { string, func } from "prop-types";

Square.propTypes = {
  onClick: func.isRequired,
  value: string
};

function Square({ onClick, value = "" }) {
  console.log('abc')
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
