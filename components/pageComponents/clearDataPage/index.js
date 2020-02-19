import React, { useState } from 'react';
import { Input, Button, Layout } from '../../common';
import './clearDataPage.scss';
import { buttonText, dbOptions } from '../../../fixtures';
import { clearDB } from '../../../api';

const ClearDataPage = () => {

  const [seletedValue, setSelectedValue] = useState('');
  const [msg, setMsg] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
  }; 

  const getEnv = (val) => val.split('-')[1];

  const handleOnClick = async () => {
    const env = getEnv(seletedValue);
    const { data } = await clearDB(env);
    setMsg(data);
    setShowMsg(true);
  };

  const handleClose = () => {
    setMsg('');
    setShowMsg(false);
    setSelectedValue('');
  };

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
          onClick={handleOnClick}
        />
      </div> 

      {
        showMsg && (
          <div className="info-box-wrapper">
            <div className="info-box">
              <h3>{msg}</h3>
              <Button 
                text='close'
                onClick={handleClose}
              />
            </div>
          </div>
          
        )
      }
    </Layout>
  );
};

export default ClearDataPage;