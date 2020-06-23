import React from 'react';
import { servicePeople } from '../../../services/servicePeople';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { Table, Container } from 'react-materialize';
import { Report } from './Report';
import { ReportsSearch } from './Search/Search';
import { search } from '../../../shared/utilities';
import styles from './ReportsPage.module.css';
import {storageService} from '../../../services/storageService';


class ReportPage extends React.Component {
    constructor() {
        super();
        this.state = {
            candidates: [],
            filteredCandidates: []
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




    render() {
        const access = storageService.getSession("accessToken");
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
                                {this.state.filteredCandidates.map(can => (
                                    <Report
                                        company={can.companyName}
                                        name={can.candidateName}
                                        date={can.interviewDate}
                                        status={can.status}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            )
        }
    }

export { ReportPage }