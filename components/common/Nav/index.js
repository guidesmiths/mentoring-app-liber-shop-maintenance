import React from 'react';
import Indicator from '../Indicator';
import './nav.scss';

const Nav = () => {
  const menuItems = ['delete', 'create new index', 'change target index', 'import data', 'change search index'];
  const renderNavBar = () => menuItems.map((item, i) => (
    <ul key={item}>
      <li>
        <span><Indicator num={i + 1} /></span>{item}
      </li>
    </ul>
  ));
  return (
    <nav>
      {renderNavBar()}
    </nav>
  );
};

export default Nav;