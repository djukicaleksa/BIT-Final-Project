import React from 'react';
import styles from './NavList.module.css';

const NavList = () =>{
    return(
        <div>
        <ul>
  <li><h5><span className={styles.number}>1</span> Select Candidate</h5></li>
  <li><h5><span className={styles.number}>2</span> Select Company</h5></li>
  <li><h5><span className={styles.number}>3</span> Fill Report Details</h5></li>
</ul>  
</div>

    )
}


export {NavList}