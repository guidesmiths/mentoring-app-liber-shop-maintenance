import React from 'react';
import { Layout } from '../../common';
import { instruction } from '../../../fixtures';

const ChangeTargetIndexPage = () => {

  return (
    <Layout title='Change Index (Manually)'>
      <p>{instruction.filter(instr => instr.step === 3)[0].text}</p>
    </Layout>
  );
};

export default ChangeTargetIndexPage;