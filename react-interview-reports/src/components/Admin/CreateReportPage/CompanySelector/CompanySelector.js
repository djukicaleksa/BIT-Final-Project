import React from 'react'
import { servicePeople } from '../../../../services/servicePeople'
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'

import style from './CompanySelector.module.css'


export const CompanySelector = (props) => {


    return (
        <div className={style.wrapper}>
            <ul className={style.companyList}>
                {props.companyList.map((company, i) => {
                    return <li tabindex={i} className={style.companyListItem} onClick={() => { props.getData(company.id, company.companyName) }}>{company.companyName} </li>
                })}
            </ul>
            <br></br>
              <h5>{props.candidate}</h5>
        </div >
    )
}