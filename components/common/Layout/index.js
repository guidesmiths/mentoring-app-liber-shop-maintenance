import React from 'react';
import Nav from '../Nav';
import './layout.scss';

const Layout = ({ children }) => {
  return(
    <div className='layout'>
      <header>
        <figure>
          <img src="/static/images/gs_icon.png" alt="gs_icon" />
        </figure>
        <h1>Liber Shop Maintenance</h1>
      </header>
     
      <div className="nav_horizontal">
        <h3>Instruction</h3>
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