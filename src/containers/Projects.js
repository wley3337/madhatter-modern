import React from 'react'
import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../enumerables/projectObj'
import teaPartialWithCard from '../images/teaPartyPartialWithCard.png'

const Projects = () =>{
    return( 
       <React.Fragment>
           <div className="project-title-wrapper">
               <img src={teaPartialWithCard} className="tea-party-card" alt="Mad Hatter Tea Party"/>
           </div>
            <div className="projects-wrapper">
                {projects.map( project => <ProjectDetail key={project.id} {...project} /> )}
            </div>
       </React.Fragment>
    )
}

export default Projects 