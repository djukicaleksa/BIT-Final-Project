import React from 'react';
import Modal from 'react-modal';
import style from './DetailedReport.module.css'

import { customStyles } from '../constants'
import { convertDate } from '../utilities'



export const DetailedReport = (props) => {
    return (<Modal
        isOpen={props.isOpen}

        onRequestClose={() => { props.openModal() }}
        style={customStyles}
        contentLabel="Example Modal"
    >
        {/*Modal html goes below */}
        <div className='modalWrapper'>
            <h2>
                {props.candidateName}
            </h2>
            <hr></hr>
            <div>
                <label className={style.textLabel}>Company :<p className={style.reportText}>{props.report.companyName}</p></label>
                <label className={style.textLabel}>Interview Date :<p className={style.reportText}>{convertDate(props.report.interviewDate)}</p></label>
                <label className={style.textLabel}>Phase :<p className={style.reportText}>{props.report.phase}</p></label>
                <label className={style.textLabel}>Status :<p className={style.reportText}>{props.report.status}</p></label>
            </div>
            <div>
                <label>Company :<p>DescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDescDesc</p></label>
            </div>
        </div>

        {/*Modal html goes above */}
    </Modal>)
}