import React from 'react'

const ProjectDetail = ({title, description, githubLink, techUsed})=>{
    return(
        <div className="project-detail-div">
            <div className="project-header">
                <a href={githubLink} alt="git hub project" target="_blank" rel="noopener noreferrer">
                <p className="project-detail-title">{title}</p>
                </a>
            </div>
            <p className="project-detail-desc">{description}</p>
            <p className="project-detail-tech"><strong>Tech used:</strong>  {techUsed}</p>
        </div>
    )
}

export default ProjectDetail