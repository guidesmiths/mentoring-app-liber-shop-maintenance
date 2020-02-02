import React from 'react';
import { Layout } from '../../common';
import { instruction } from '../../../fixtures';

const ChangeSearchIndexPage = () => {

  return (
    <Layout title='Change Search Index (Manually)'>
      <p>{instruction.filter(instr => instr.step === 5)[0].text}</p>
    </Layout>
  );
};

export default ChangeSearchIndexPage;