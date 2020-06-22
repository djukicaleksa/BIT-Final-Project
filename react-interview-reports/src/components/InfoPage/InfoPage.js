import React from 'react';
import {Header} from '../../components/HomePage/Header/Header';
import {servicePeople} from '../../services/servicePeople';
import {CandidatesInfo} from './CandidatesInfo/CandidatesInfo';
import {Container} from 'react-materialize';
import styles from './InfoPage.module.css';
import { ReportList } from './ReportList/ReportList';

class InfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            candidates: [],
            reports: []
        }
    }
    componentDidMount() {
        servicePeople.getCandidatesInfo(this.props.match.params.id)
            .then(data => {
                this.setState({ candidates: data })
            })
            this.getReports();
    }

    getReports = () => {
        servicePeople.getReports()
            .then(reportList => this.setState({ reports: reportList }))
    }


    render(){

        return(
            <div>
            <Header/>
           <Container className={styles.user}>
            <CandidatesInfo
                name={this.state.candidates.name}
                email={this.state.candidates.email}
                education={this.state.candidates.education}
                birthday={this.state.candidates.birthday}
            />
            <ReportList reports={this.state.reports} candidateId={this.props.match.params.id}></ReportList>
           </Container>
            </div>
        )
    }
}

export { InfoPage };