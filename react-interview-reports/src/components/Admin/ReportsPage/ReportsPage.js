import React from 'react';
import { servicePeople } from '../../../services/servicePeople';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { Table, Container } from 'react-materialize';
import { Report } from './Report';
import { ReportsSearch } from './Search/Search';
import { search } from '../../../shared/utilities';
import styles from './ReportsPage.module.css';
import { StorageService } from '../../../services/storageService';
import { Authentication } from '../../../services/AuthService';
import { ErrorBoundary } from '../../../shared/ErrorBoundary';


class ReportPage extends React.Component {
    constructor() {
        super();
        this.state = {
            candidates: [],
            filteredCandidates: [],
            isOpen: false
        }
    }
    componentDidMount() {
        const deletedReports=StorageService.get("reports")
        servicePeople.getReports()
            .then(reports => this.setState({ candidates: reports, filteredCandidates: deletedReports ? deletedReports : reports }))
            
            
    }


    searchedReports = (textInput) => {
        const results = search(this.state.candidates, ['companyName', 'candidateName'], textInput)
        this.setState({ filteredCandidates: results })
    }


    openModal = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    removeReport = (id) => {
        console.log(id);
        let tempArray = this.state.filteredCandidates

        let elementToRemove = this.state.filteredCandidates.filter(report => report.id === id)
        console.log(elementToRemove);
        const index = tempArray.indexOf(elementToRemove[0]);
        console.log(index);

        if (index > -1) {
            tempArray.splice(index, 1)

        }
        console.log(this.state.filteredCandidates);
        this.setState({ filteredCandidates: tempArray })
        StorageService.set('reports', tempArray)

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
                                        isOpen={this.state.isOpen}
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