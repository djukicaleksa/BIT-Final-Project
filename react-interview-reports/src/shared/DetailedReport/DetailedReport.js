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
        <div className={style.modalWrapper}>
            <h2>
                {props.report.candidateName}
            </h2>
            <hr></hr>
            <div className={style.detailsWrapper}>
                <div>
                    <label className={style.textLabel}>Company :<p className={style.reportText}>{props.report.companyName}</p></label>
                    <label className={style.textLabel}>Interview Date :<p className={style.reportText}>{convertDate(props.report.interviewDate)}</p></label>
                    <label className={style.textLabel}>Phase :<p className={style.reportText}>{props.report.phase}</p></label>
                    <label className={style.textLabel}>Status :<p className={style.reportText}>{props.report.status}</p></label>
                </div>
                <div className={style.descriptionWrapper}>
                    <label className={style.description}>Description :<p className={style.reportText}>Nulla lacinia nibh erat, et aliquam eros bibendum eu. 
                    Nam pellentesque lobortis placerat. Cras nec elit ipsum. Ut venenatis turpis quis tortor efficitur sagittis. Donec ac lorem dictum, 
                    posuere nulla vel, egestas mi. Sed placerat, odio eget vestibulum malesuada, lorem orci ultricies ex, a congue nisl felis non est. 
                    Cras ac sollicitudin libero. Sed volutpat condimentum velit et condimentum. Suspendisse convallis justo eu mi ornare, in posuere eros
                     malesuada. Sed egestas accumsan sagittis. Maecenas eget dapibus tortor, id rutrum magna. Nunc sed porttitor massa. Suspendisse nec 
                     sodales neque, id varius mi.</p></label>
                </div>
            </div>
        </div>

    </Modal>)
}