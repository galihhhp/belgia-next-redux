import classNames from 'classnames';

const Button = ({ label, className, block, size, disabled, onClick }) => {
  return (
    <button
      type="button"
      className={classNames(
        'button btn',
        { 'btn-block': block },
        { [`btn-${size}`]: size },
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label && label}
    </button>
  );
};

export default Button;
