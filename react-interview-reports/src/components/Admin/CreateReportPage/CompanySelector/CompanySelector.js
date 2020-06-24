import React from 'react'
import { servicePeople } from '../../../../services/servicePeople'
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'

import style from './CompanySelector.module.css'


export const CompanySelector = (props) => {


    return (
        <div className={style.wrapper}>
            <h4>Select Company :</h4>
            <ul className={style.companyList}>
                {props.companyList.map((company, i) => {
                    return <li tabindex={i} className={style.companyListItem}>{company.name}</li>
                })}
            </ul>
            <br></br>
            <div className={style.buttonToTheRight}>
                <Button>Previous</Button>
                <Button>Next</Button>
            </div>
        </div >
    )
}