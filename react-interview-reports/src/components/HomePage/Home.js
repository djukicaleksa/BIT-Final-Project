import React from 'react';
import style from './Home.module.css';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { Container, Row, Col } from 'react-materialize';
import { servicePeople } from '../../services/servicePeople';
import { Candidate } from '../CandidateList/Candidate'
import { ReportList } from '../ReportList';


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

        // this.setState((previousState) => {
        //     return { isFiltered: !previousState.isFiltered }
        // })
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