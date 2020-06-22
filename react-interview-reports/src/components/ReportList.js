import React from 'react'

export const ReportList = (props) => {

    let thisCandidatesReports = props.reports.filter(report => report.id === props.candidateId)


    return (
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Interview Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {thisCandidatesReports.map(report => {

                    return (<tr>
                        <td>{report.companyName}</td>
                        <td>{report.interviewData}</td>
                        <td>{report.status}</td>

                    </tr>)
                })}
            </tbody>



        </table>

    )
}