import React from 'react';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { Container, Row, Col } from 'react-materialize';



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidatesList: []
        }
    }




    render() {
        return (
            <div>
                <Header />
                <Container >
                    <Search />
                </Container>
            </div>
        )
    }
}

export { Home }