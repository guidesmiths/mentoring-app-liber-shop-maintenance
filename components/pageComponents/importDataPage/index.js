import React from 'react';
import { Layout, Input, Button } from '../../common';
import { instruction, dbOptions } from '../../../fixtures';

const ImportDataPage = () => {

  return (
    <Layout title='Import Data'>
      <p>{instruction.filter(instr => instr.step === 4)[0].text}</p>
      <div>
        <Input type='optional' options={dbOptions.liber_env} />
        <Button text="Import Data" />
      </div>
      
    </Layout>
  );
};

export default ImportDataPage;