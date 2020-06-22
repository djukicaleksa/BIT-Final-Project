import React from 'react';
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize';


const CandidatesInfo = ({image, name, email, dob, education}) =>{
    return(
        <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
      <p>Name: </p>
    <h5>{name}</h5>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>Email: </p>
    <h5>{email}</h5>
    </Card>
    
  </Col>
</Row>
    )
}

export {CandidatesInfo};