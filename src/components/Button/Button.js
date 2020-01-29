import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ clickMore }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button onClick={clickMore} className="Button" type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  clickMore: PropTypes.func.isRequired,
};

export default Button;
