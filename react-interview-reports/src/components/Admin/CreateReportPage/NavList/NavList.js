import React from 'react';
import styles from './NavList.module.css';

const NavList = () =>{
    return(
        <div className={styles.navList}>
        <ul>
  <li><h5 id="first"><span>1</span> Select Candidate</h5></li>
  <li><h5 id='second'><span>2</span> Select Company</h5></li>
  <li><h5 id='third'><span>3</span> Fill Report Details</h5></li>
</ul>  
</div>

    )
}


export {NavList}