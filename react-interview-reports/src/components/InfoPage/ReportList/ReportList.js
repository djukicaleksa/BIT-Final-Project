import React from 'react'
import { convertDate } from '../../../shared/utilities';
import Modal from 'react-modal'
import { customStyles } from '../../../shared/constants'
import { DetailedReport } from '../../../shared/DetailedReport/DetailedReport';

export const ReportList = (props) => {

    let thisCandidatesReports = props.reports.filter(report => report.candidateId === Number(props.candidateId))


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th>Status</th>
                        <th width='20px'>View</th>
                    </tr>
                </thead>
                <tbody>
                    {thisCandidatesReports.map((report, i) => {

                        return (<tr key={i}>
                            <td>{report.companyName}</td>
                            <td>{convertDate(report.interviewDate)}</td>
                            <td>{report.status}</td>
                            <td width='20px'><i className="fa fa-eye" onClick={() => { props.openModal() }}></i></td>
                            <DetailedReport isOpen={props.isOpen} openModal={props.openModal} report={report} />


                        </tr>)
                    })}
                </tbody>

            </table>
        </div>
    )
}