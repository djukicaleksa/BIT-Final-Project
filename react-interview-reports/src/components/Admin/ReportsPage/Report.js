import React from 'react';

const Report = ({ company, name, date, status }) => {

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
                <i className="fa fa-eye"></i>
            </td>
            <td>
                <i className="fa fa-close"></i>
            </td>
        </tr>
    )
}

export { Report };