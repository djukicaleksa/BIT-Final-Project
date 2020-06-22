import React from 'react';
import style from './Home.module.css';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { Container, Row, Col } from 'react-materialize';
import { servicePeople } from '../../services/servicePeople';
import { Candidate } from '../CandidateList/Candidate'


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
                this.setState({ candidatesList: data, filteredCandidate: data })
            })
    }

    searchedCandidates = (textInput) => {

        this.state.isFiltered ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false })
        const newCandidate = this.state.candidatesList.filter((candidate) => {
            return candidate.name.toLowerCase().includes(textInput.toLowerCase());
        });
        this.setState({
            filteredCandidate: newCandidate,
        });
    };

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Search searchedCandidates={this.searchedCandidates} />

                    <Row>


                        <main className={style.main}>
                            {this.state.isFiltered ?
                                (this.state.candidatesList.map((candidate, i) => {
                                    return <Candidate name={candidate.name} key={candidate.id} />
                                })) : (this.state.filteredCandidate.map((candidate, i) => {
                                    return <Candidate name={candidate.name} email={candidate.email} />
                                }))}
                        </main>



                    </Row>
                </Container>
            </div>
        )
    }
}

export { Home }