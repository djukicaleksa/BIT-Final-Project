import React from 'react';
import {Header} from './Header/Header';
import {Search} from './Search/Search';
import {Container, Row, Col} from 'react-materialize';

class Home extends React.Component{
    constructor(){
        super()
    }








    render(){
        return(
            <div>
            <Header/>
            <Container >
                <Row>
                    <Col lg={6}>
                <h4>Candidates</h4>
                </Col>
                <Col lg={6}>
            <Search/>
            </Col>            
            </Row>
            </Container>
            </div>
        )
    }
}

export {Home}