import React from 'react';
import {Header} from './Header/Header';
import {Search} from './Search/Search';
import {Container, Row, Col} from 'react-materialize';
import style from './Home.module.css';
import {servicePeople} from '../../services/servicePeople';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            candidatesList:[],
            filteredCandidate:[]
        }
    }

    componentDidMount(){
        servicePeople.getCandidates()
        .then(data=>{
            this.setState({candidatesList: data, filteredCandidate: data})
        })
    }

    searchedCandidates = (textInput) => {
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
            <Header/>
            <Container>           
            <Search searchedCandidates={this.searchedCandidates}/>   
            </Container>
            </div>
        )
    }
}

export { Home }