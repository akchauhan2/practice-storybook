import React from 'react';
import Proptypes from 'prop-types';

function Button({ label, backgroundColor = 'red', size = 'md', handleClick }) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'md') scale = 1.5;
  if (size === 'lg') scale = 2;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: Proptypes.string,
  backgroundColor: Proptypes.string,
  size: Proptypes.oneOf(['sm', 'md', 'lg']),
  handleClick: Proptypes.func,
};
export default Button;
