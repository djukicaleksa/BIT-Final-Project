import React from 'react';
import { DetailedReport } from '../../../shared/DetailedReport/DetailedReport'

const Report = ({ company, name, date, status, isOpen, openModal, phase, removeReport, id, note }) => {
    const report = { companyName: company, candidateName: name, interviewDate: date, status, phase, note }
    console.log(report);


    return (

        <tr>
            <td>
                {company}
            </td>
            <td>
                {name}
            </td>
            <td>
                {date}
            </td>
            <td>
                {status}
            </td>
            <td>
                <i className="fa fa-eye" onClick={() => { openModal() }}></i>
            </td>
            <td>
                <i className="fa fa-close" data-id={id} onClick={() => { removeReport(id) }}></i>
            </td>
            <DetailedReport isOpen={isOpen} openModal={openModal} report={report}></DetailedReport>
        </tr>

    )
}

export { Report }