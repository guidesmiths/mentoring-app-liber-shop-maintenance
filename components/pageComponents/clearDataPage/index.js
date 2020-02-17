import React, { useState } from 'react';
import { Input, Button, Layout } from '../../common';
import './clearDataPage.scss';
import { buttonText, dbOptions } from '../../../fixtures';
import { clearDB } from '../../../api';

const ClearDataPage = () => {

  const [seletedValue, setSelectedValue] = useState('');
  const handleSelect = (value) => {
    setSelectedValue(value);
  }; 

  const getEnv = (val) => val.split('-')[1];

  return (
    <Layout step={1}>
      <div className='clearDataPage'>
        <h3 className='item'>Choose DB</h3>
        <Input 
          type='optional' 
          options={dbOptions.database} 
          placeholder='Choose database' 
          className='item' 
          width={200} 
          value={seletedValue}
          onSelect={handleSelect}
        />
        <Button
          text={buttonText.DELETE_DB}
          className='item'
          onClick={() => clearDB(getEnv(seletedValue))}
        />
      </div> 
    </Layout>
  );
};

export default ClearDataPage;