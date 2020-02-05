import React from 'react';
import { Input, Button, Layout } from '../../common';
import './clearDataPage.scss';
import { buttonText, dbOptions } from '../../../fixtures';

const ClearDataPage = () => {

  return (
    <Layout step={1}>
      <div className='clearDataPage'>
        <h3 className='item'>Choose DB</h3>
        <Input type='optional' options={dbOptions.database} placeholder='Choose database' className='item' width={200} />
        <Button text={buttonText.DELETE_DB} className='item' />
      </div> 
    </Layout>
  );
};

export default ClearDataPage;