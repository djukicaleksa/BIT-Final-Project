import React from 'react'

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
                    </tr>
                </thead>
                <tbody>
                    {thisCandidatesReports.map(report => {

                        return (<tr>
                            <td>{report.companyName}</td>
                            <td>{report.interviewDate}</td>
                            <td>{report.status}</td>

                        </tr>)
                    })}
                </tbody>



            </table>
        </div>
    )
}