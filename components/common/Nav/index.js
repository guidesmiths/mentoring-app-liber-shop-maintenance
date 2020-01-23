import React from 'react';
import Link from 'next/link';
import Indicator from '../Indicator';
import './nav.scss';
import menuItems from '../../../fixtures/menuItems.json';

const Nav = () => {
 
  const renderNavBar = () => menuItems.map((item, i) => (
    <ul key={item.menuItem}>
      <Link href={item.link} passHref>
        <a>
          <li>
            <span><Indicator num={i + 1} /></span>{item.menuItem}
          </li>
        </a>
      </Link>
    </ul>
  ));
  return (
    <nav>
      {renderNavBar()}
    </nav>
  );
};

export default Nav;