import React from 'react';
import Link from 'next/link';
import Nav from '../Nav';
import './layout.scss';

const Layout = ({ children, title }) => {
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
        <h2>{title}</h2>
      </div>
      <div className="nav_vertical">
        <Nav />
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

export default Layout;