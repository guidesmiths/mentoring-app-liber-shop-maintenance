import React from 'react';
import Link from 'next/link';
import Nav from '../Nav';
import { Indicator } from '../index';
import { colors, instruction } from '../../../fixtures';
import './layout.scss';

const Layout = ({ children, title, step }) => {
  
  const STEP = step;
  const content = step ?
    instruction.filter(instr => instr.step === STEP)[0].text : 
    '';

  return(
    <div className='layout'>
      <header>
        <figure>
          <Link href='/'>
            <a>
              <img src="/static/images/gs_icon.png" alt="gs_icon" />
            </a>
          </Link>
        </figure>
        <h1>Liber Shop Maintenance</h1>
      </header>
     
      <div className="nav_horizontal">
        {step ? <Indicator num={step} color={colors.color_main} size={50} /> : <h2>{title}</h2>}
      </div>
      <div className="nav_vertical">
        <Nav currentStep={step} />
      </div>
      <div className='content'>
        {content}
        <span className="separator" />
        {children}
      </div>
    </div>
  );
};

export default Layout;