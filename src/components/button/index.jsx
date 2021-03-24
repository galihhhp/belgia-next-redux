import classNames from 'classnames';
import React from 'react'

const Button = ({
  label,
  className,
  block,
  type,
  mr,
  size,
  blue,
  white,
  transparent,
  rounded,
  disabled,
  onClick,
  value,
  onChange,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        'btn',
        { btn__blue: blue },
        { btn__white: white },
        { btn__transparent: transparent },
        { 'btn-block': block },
        { 'mr-3': mr },
        { 'rounded-pill': rounded },
        { [`btn-${size}`]: size },
        { [`btn-${type}`]: type },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      value={value}
      onChange={onChange}
    >
      {label && label}
    </button>
  );
};

export default Button;
