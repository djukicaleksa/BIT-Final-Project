import React from 'react';

import styles from './ReportsPage.module.css';

import { Report } from './Report';
import { ReportsSearch } from './Search/Search';
import { search } from '../../../shared/utilities';
import { Table, Container } from 'react-materialize';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { ErrorBoundary } from '../../../shared/ErrorBoundary';
import { servicePeople } from '../../../services/servicePeople';
import { Authentication, ReportFromServer } from '../../../services/AuthService';


class ReportPage extends React.Component {
    constructor() {
        super();
        this.state = {
            candidates: [],
            filteredCandidates: [],
            modalIsOpen: false
        }
    }
    componentDidMount() {
        servicePeople.getReports()
            .then(reports => this.setState({ candidates: reports, filteredCandidates: reports }))
    }

    searchedReports = (textInput) => {
        const results = search(this.state.candidates, ['companyName', 'candidateName'], textInput)
        this.setState({ filteredCandidates: results })
    }

    openModal = () => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }))
    }

    removeReport = (id) => {
        let tempArray = this.state.filteredCandidates
        let elementToRemove = this.state.filteredCandidates.filter(report => report.id === id)
        const index = tempArray.indexOf(elementToRemove[0]);
        if (index > -1) {
            tempArray.splice(index, 1)
        }
        this.setState({ filteredCandidates: tempArray })
        ReportFromServer.remove(id)

    }

    render() {
        const access = Authentication.isLogon()
        if (!access) {
            this.props.history.push('/admin')
        }
        return (
            <div>
                <AdminHeader />
                <Container className={styles.search}>
                    <ReportsSearch searchedReports={this.searchedReports} />
                </Container>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th data-field="company">
                                    Company
                                </th>
                                <th data-field="name">
                                    Candidate
                            </th>
                                <th data-field="date">
                                    Interview Date
                            </th>
                                <th data-field="status">
                                    Status
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filteredCandidates.map((can, i) => (
                                <ErrorBoundary>
                                    <Report
                                        key={i}
                                        id={can.id}
                                        phase={can.phase}
                                        company={can.companyName}
                                        name={can.candidateName}
                                        date={can.interviewDate}
                                        status={can.status}
                                        openModal={this.openModal}
                                        modalIsOpen={this.state.modalIsOpen}
                                        removeReport={this.removeReport}
                                        note={can.note}

                                    /></ErrorBoundary>
                            ))}
                        </tbody>
                    </Table>

                </Container>
            </div>
        )
    }
}

export { ReportPage }