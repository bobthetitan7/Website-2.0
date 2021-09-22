import React from "react";
import '../style/work-card.css'

const WorkCard = ({work}) => {
    return (
        <div className='workCard'>
            <img src={work.copanyLogo} className='workLogo' />
            <div className='workInfo'>
                <label className='workName'> {work.company}</label> 
                <label className='workRole'> {work.role} </label>
                <div className='workDate'>
                    <label> {work.dateStart} </label> - <label> {work.dateEnd} </label>
                </div>
                <div className='workDesc'>
                    <p>{work.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;