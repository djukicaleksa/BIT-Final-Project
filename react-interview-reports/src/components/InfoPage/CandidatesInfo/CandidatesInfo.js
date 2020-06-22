import React from 'react';
import {Row, Col} from 'react-materialize';
import styles from './CandidatesInfo.module.css';

const CandidatesInfo = ({ name, email, birthday, education}) =>{
    return(
      
          <Row>
              <Col lg={3} offset="m1">
                    <img className={styles.img} src="../userImg.jpg"/>
              </Col>
              <Col lg={4}>
                <p>Name:</p>
                <h5 className={styles.name}>{name}</h5>
                <p>Email:</p>
                 <h5>{email}</h5>
              </Col>
              <Col lg={4} >
                    <p>Date of Birth:</p>
                    <h5 className={styles.date}>{birthday}</h5>
                    <p>Education:</p>
                    <h5>{education}</h5>
              </Col>
          </Row>

    )
}


export {CandidatesInfo};