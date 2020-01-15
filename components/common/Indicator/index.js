import React from 'react';
import './indicator.scss';

const Indicator = ({ size = 24, num = 0, color ='#263C47' }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    background: color
  };
  return (
    <div className="indicator" style={style}>{num}</div>
  );
};

export default Indicator;