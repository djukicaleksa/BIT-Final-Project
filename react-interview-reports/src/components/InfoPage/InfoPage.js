import React from 'react';
import { Header } from '../../components/HomePage/Header/Header';
import { servicePeople } from '../../services/servicePeople';
import { CandidatesInfo } from './CandidatesInfo/CandidatesInfo';
import { Container } from 'react-materialize';
import styles from './InfoPage.module.css';
import { ReportList } from './ReportList/ReportList';
import Modal from 'react-modal'



class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            reports: [],
            isOpen: false
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

    openModal = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }


    render() {

        return (
            <div>
                <Header />
                <Container className={styles.user}>
                    <CandidatesInfo
                        name={this.state.candidates.name}
                        email={this.state.candidates.email}
                        education={this.state.candidates.education}
                        birthday={this.state.candidates.birthday}
                    />
                    <h4>Reports</h4>
                    <ReportList reports={this.state.reports} candidateId={this.props.match.params.id} openModal={this.openModal} isOpen={this.state.isOpen}></ReportList>

                </Container>
            </div>
        )
    }
}

export { InfoPage };