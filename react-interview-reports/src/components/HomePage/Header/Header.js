import React from 'react';
import { Navbar, NavItem, Icon, } from 'react-materialize';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


const Header = () => {
  return (
    <Navbar className={`${styles.header} teal`}
      alignLinks="right"
      brand={<a className="brand-logo " href="#">Interviews Reports</a>}
      id="mobile-nav"
      centerChildren
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <Link to='/admin'><NavItem>
        Login
  </NavItem></Link>
      <NavItem>
        Candidates
  </NavItem>
    </Navbar>
  )
}

export { Header };