import React, { useState } from 'react';
import classnames from 'classnames';
import './input.scss';

const Input = ({ type = 'default', value = '', options = [], placeholder = '', className, width }) => {

  const [seletedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
  }; 

  const defaultInput = (value) => <input value={value} placeholder={placeholder} />;

  const optionalInput = (options = []) => {

    return(
      <>
        <input value={seletedValue} readOnly placeholder={placeholder} />
        <ul className='options'>
          {options.map(option => (
            <li 
              onClick={()=>handleSelect(option)}
              key={option}
              className='option-list'
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role='button'
              tabIndex='0'
            >{option}
            </li>
          ))
          }
        </ul>
      </>
    );
  };

  const renderInput = (type, value, options) => {
    const types = {
      default: defaultInput(value),
      optional: optionalInput(options)
    };
    return types[type];
  };

  return (
    <div 
      className={classnames({
        'cs-input': true,
        [className]: className
      }
      )}
      style={{ width }}
    >
      {renderInput(type, value, options)}
    </div>
  );
};

export default Input;