import React from 'react';
import { servicePeople } from '../../../services/servicePeople';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { Table } from 'react-materialize';
import { Report } from './Report';

class ReportPage extends React.Component {
    constructor() {
        super();
        this.state = {
            candidates: []
        }
    }
    componentDidMount() {
        servicePeople.getReports()
            .then(reports => this.setState({ candidates: reports }))
    }
    render() {
        return (
            <div>
                <AdminHeader />


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
                        {this.state.candidates.map(can => (
                            <Report
                                company={can.companyName}
                                name={can.candidateName}
                                date={can.interviewDate}
                                status={can.status}
                            />
                        ))}

                    </tbody>
                </Table>



            </div>
        )
    }
}

export { ReportPage }