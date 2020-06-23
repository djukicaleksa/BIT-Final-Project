import React from 'react';
import style from './Home.module.css';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { Container, Row, } from 'react-materialize';
import { servicePeople } from '../../services/servicePeople';
import { Candidate } from '../CandidateList/Candidate'
import {search} from '../../shared/utilities';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidatesList: [],
            filteredCandidate: [],
            isFiltered: false
        }
    }

    componentDidMount() {
        servicePeople.getCandidates()
            .then(data => {
                console.log(data);
                
                 return this.setState({ candidatesList: data, filteredCandidate: data })
            })
    }


    searchedCandidates =(textInput)=>{    
     const res =   search(this.state.candidatesList, ['name'], textInput)
        this.setState({filteredCandidate: res})
}
   
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Search searchedCandidates={this.searchedCandidates} />

                    <Row>
                        <main className={style.main}>
                            {this.state.filteredCandidate.map((candidate, i) => {
                                return <Candidate name={candidate.name} email={candidate.email} id={candidate.id} />
                            })}
                        </main>
                    </Row>
                </Container>
            </div>
        )
    }
}

export { Home }