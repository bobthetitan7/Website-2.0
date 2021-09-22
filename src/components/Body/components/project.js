import React from "react";
import { ProjectData } from "../../../data/project";
import '../style/project.css'
import ProjectCard from "./project-card";

const Project = () => {
    const data = ProjectData
    return (
        <div className="project">
            <label className="sectionHeader"> Projects </label>
            <div>
                {data.map((project) => {
                    return (
                        <ProjectCard project={project}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;