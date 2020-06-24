import React from 'react';
import {Select, Row, Col} from 'react-materialize';
const ReportDetails = () =>{
return(
    <Row>
        
           <Col lg={4}>
        <input type="date" label="date"></input>
        </Col>
        <Col lg={4}>
    <Select
  id="Select-9"
  label="Phase"
  multiple={false}
  options={{
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }
  }}
  value="2"
>
  <option value="cv">
    cv
  </option>
  <option value="hr">
    hr
  </option>
  <option value="teach">
    teach
  </option>
  <option value="teach">
    final
  </option>
</Select>
</Col>
<Col lg={4}>
    <Select
    id="Select-9"
    label="Status"
    multiple={false}
    options={{
      classes: '',
      dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
      }
    }}
    value="2"
  >
    <option value="passed">
      passed
    </option>
    <option value="declined">
      declined
    </option>
  </Select>
  </Col>
  </Row>
)
}

export {ReportDetails}