import React from "react";
import '../style/project-card.css'

const ProjectCard = ({project}) => {
    return (
        <div className='projectCard'>
            <div className='projectInfo'>
                <label className='projectTitle'> {project.title} </label>
                <div className='projectLinks'>
                    {project.github && (
                        <a className='projectLink' href={project.github}>
                            <div className='linkButton'>
                                <i class="devicon-github-original githubIcon"></i> Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className='projectTag'>
                    {project.tag.map((tag) => {
                        return (<label className='tagItem'> {tag} </label>)
                    })}
                </div>
            </div>
            {project.image && <img src={project.image} className='projectPhoto' />}
        </div>
    )
}

export default ProjectCard;