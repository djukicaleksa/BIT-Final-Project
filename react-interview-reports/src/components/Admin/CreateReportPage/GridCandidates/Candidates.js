import React from 'react';
import {Collection, CollectionItem, Icon, Col, Row} from 'react-materialize';
import styles from './Candidates.module.css'


const Candidates =({name, email})=>{
    return(
      
  <Col className={styles.pad}
    m={6}
    s={12}
  >
    <Collection>
      <CollectionItem className="avatar">
        <img
          alt=""
          className="circle"
          src="../../userImg.jpg"
        />
        <span className="title">
          {name}
        </span>
        <p>
         {email} 
          
        </p>
        <a
          className="secondary-content"
          href="javascript:void(0)"
        >
          <Icon>
            grade
          </Icon>
        </a>
      </CollectionItem>
    </Collection>
  </Col>
    )
}

export {Candidates}