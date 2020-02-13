import React from 'react';
import Link from 'next/link';
import Indicator from '../Indicator';
import './nav.scss';
import { menuItems, colors } from '../../../fixtures';

const Nav = ({ currentStep }) => {
 
  const renderNavBar = () => menuItems.map((item, i) => {
    let seleted;
    if(currentStep) {
      seleted = Number(currentStep) === Number(i+1);
    }else{
      seleted =true;
    }
    
    return (
      <ul key={item.menuItem}>
        <Link href={item.link} passHref>
          <a>
            <li style={{ background: `${seleted ? colors.color_main : colors.color_inActive }` }}>
              <span><Indicator num={i + 1} /></span>{item.menuItem}
            </li>
          </a>
        </Link>
      </ul>
    );
  });
  return (
    <nav>
      {renderNavBar()}
    </nav>
  );
};

export default Nav;