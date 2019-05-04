import React from 'react'
import ProjectDetail from '../components/ProjectDetail'
import {inProgressProjects, projects} from '../enumerables/projectObj'

const Projects = () =>{
    return( 
       <React.Fragment>
            <h1 className="project-section-title">Projects</h1>
            <div className="projects-wrapper">
                <h3 className="text projects-headers">Work in Progress</h3>
                {inProgressProjects.map( project => <ProjectDetail key={project.id} {...project}/> )}

                <h3 className="text projects-headers">Completed Works</h3>
                {projects.map( project => <ProjectDetail key={project.id} {...project} /> )}
            </div>
       </React.Fragment>
    )
}

export default Projects 