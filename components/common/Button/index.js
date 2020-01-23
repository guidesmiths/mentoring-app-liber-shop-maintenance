import React from 'react';
import classnames from 'classnames';
import './button.scss';

const Button = ({ text, ...props }) => (
  <button 
    {...props}
    className={classnames({
      'cs-button': true,
      [props.className]: props.className
    })} 
  >
    {text}
  </button>
);

export default Button;