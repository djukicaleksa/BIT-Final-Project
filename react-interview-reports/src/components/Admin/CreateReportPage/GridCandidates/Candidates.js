import React from 'react';
import { Collection, CollectionItem, Icon, Col, Row } from 'react-materialize';
import styles from './Candidates.module.css'


const Candidates = (props) => {
  return (

    <Col className={styles.pad}
      m={6}
      s={12}
    >
      <Collection onClick={() => { props.getData(props.candidate.id, props.candidate.name) }}>
        <CollectionItem className="avatar">
          <img
            alt=""
            className="circle"
            src="../../userImg.jpg"
          />
          <span className="title">
            {props.candidate.name}
          </span>
          <p>
            {props.candidate.email}

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

export { Candidates }