import React from 'react';
import styles from './CandidatesInfo.module.css';
import {convertDate} from '../../../shared/utilities';

const CandidatesInfo = ({ name, email, birthday, education}) =>{
      
    return(

      <div className={styles.info}>
            <div>
      <img className={styles.img} src="../usersImg.png"/>
      </div>
            <table className={styles.tableInfo}>
                   <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Date of Birth:</th>
                    </tr>
                </thead>
                <tr>
                   <td className={styles.tdd}>{name}</td>
                   <td className={styles.tdd}>{convertDate(birthday)}</td>
                </tr>
                <tr>
                      <th>Email:</th>
                      <th>Education:</th>
                </tr>
                <tr>
                   <td className={styles.tdd}>{email}</td>
                   <td className={styles.tdd}>{education}</td>
                </tr>
            </table>
            </div>
    )
}


export {CandidatesInfo};