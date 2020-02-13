import React from 'react';
import { Layout, Input, Button } from '../../common';
import { dbOptions } from '../../../fixtures';
import './importDataPage.scss';

const ImportDataPage = () => {

  return (
    <Layout step={4}>
      <div className="importDataPage">
        <Input type='optional' options={dbOptions.liber_env} />
        <Button text="Import Data" className="button" />
      </div>  
    </Layout>
  );
};

export default ImportDataPage;