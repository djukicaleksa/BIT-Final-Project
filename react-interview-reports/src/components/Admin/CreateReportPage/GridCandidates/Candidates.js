import React from 'react';
import { Collection, CollectionItem, Icon, Col } from 'react-materialize';
import styles from './Candidates.module.css'


const Candidates = (props) => {
  return (

    <Col className={styles.pad}
      m={6}
      s={12}
    >
      <Collection onClick={() => { props.getData(props.candidate.id, props.candidate.name) }}>
        <CollectionItem tabindex={props.i} className={`avatar ${styles.collection}`}>
          <img
            alt=""
            className="circle"
            src="../../usersImg.png"
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