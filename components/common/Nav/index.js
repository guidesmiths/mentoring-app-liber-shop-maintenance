import React from 'react';
import Link from 'next/link';
import Indicator from '../Indicator';
import './nav.scss';

const Nav = () => {
  //const menuItems = ['delete', 'create new index', 'change target index', 'import data', 'change search index'];
  const menuItems = [
    {
      menuItem: 'delete',
      link: '/'
    },
    {
      menuItem: 'create new index',
      link: '/'
    },
    {
      menuItem: 'change target index',
      link: '/'
    },
    {
      menuItem: 'import data',
      link: '/'
    },
    {
      menuItem: 'change search index',
      link: '/'
    }
  ];
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