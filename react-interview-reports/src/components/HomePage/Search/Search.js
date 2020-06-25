import React from 'react';
import { NavItem, Navbar, Icon } from 'react-materialize';
import styles from './Search.module.css';

const Search = ({ searchedCandidates }) => {

  const onSearch = (e) => {
    const value = e.target.value;
    searchedCandidates(value)
  }

  return (
    <Navbar className={styles.search}
      alignLinks="right"
      brand={<a className="brand-logo" href="/">HUehue</a>}
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
      search onChange={onSearch}
    >
      <NavItem href="">
        Getting started
  </NavItem>
      <NavItem href="components.html">
        Components
  </NavItem>
    </Navbar>
  )
}

export { Search }