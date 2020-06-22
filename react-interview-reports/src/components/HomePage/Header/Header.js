import React from 'react';
import {Navbar, NavItem, Icon, } from 'react-materialize';
import styles from './Header.module.css';


const Header =()=>{
    return (
        <Navbar className={`${styles.header} teal`} 
  alignLinks="right"
  brand={<a className="brand-logo " href="#">Interviews Reports</a>}
  id="mobile-nav"
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
  <NavItem>
    Candidates
  </NavItem>
</Navbar>
    )
}

export {Header};