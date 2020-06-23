import React from 'react';
import { DetailedReport } from '../../../shared/DetailedReport/DetailedReport'

const Report = ({ company, name, date, status, isOpen, openModal, phase }) => {
    const report = { companyName: company, candidateName: name, interviewDate: date, status, phase }
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
                <i className="fa fa-close"></i>
            </td>
            <DetailedReport isOpen={isOpen} openModal={openModal} report={report}></DetailedReport>
        </tr>

    )
}

export { Report }