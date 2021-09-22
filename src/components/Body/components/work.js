import React from "react";
import { WorkData } from "../../../data/work";
import '../style/work.css'
import WorkCard from "./work-card";

const Work = () => {
    const data = WorkData
    return (
        <div className='work'>
            <label className='sectionHeader'>Work</label>
            <div className='workList'>
                {data.map((work) => {
                    return (<WorkCard work={work}/>)
                })}
            </div>
        </div>
    )
}

export default Work;