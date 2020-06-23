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
        </tr>
    )
}

export { Report };