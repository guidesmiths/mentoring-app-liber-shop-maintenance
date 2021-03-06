import React from 'react';
import { Indicator, Layout } from '../../common';
import instruction from '../../../fixtures/instruction.json';
import './homePage.scss';

const HomePage = () => {

  const renderInstruction = () => instruction.map((step, i) => (
    <div className='step' key={step.title}>
      <Indicator num={i + 1} color='#00AB81' size='40' />
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  )
  );

  return (
    <Layout title='Instruction'>
      <div className='homePage'>
        {renderInstruction()}
      </div>
    </Layout>
  );

};

export default HomePage;