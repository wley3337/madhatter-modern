import React from 'react'
import ProjectDetail from '../components/ProjectDetail'
import {inProgressProjects, projects} from '../enumerables/projectObj'
import projectHatSC from '../images/aboutHatSketchCard.png'
import teaPartial from '../images/teaPartyPartial.png'
import teaPartialWithCard from '../images/teaPartyPartialWithCard.png'

const Projects = () =>{
    return( 
       <React.Fragment>
           <div className="project-title-wrapper">
               <img src={teaPartialWithCard} className="tea-party-card" alt="Mad Hatter Tea Party"/>
               {/* <span className="project-title-card"> */}
                   {/* <img className="project-litho" src={teaPartial} alt="Mad Hatter tea party"/>
                   
                    <img className="title-card menu-card"src={projectHatSC} alt="Project Hat Card"/>
                    <h1 className="project-section-title">Projects</h1>
                    <p className="project-selection-sub-title">(a selection)</p> */}
               {/* </span> */}
               {/* <span className="project-second-img"> */}
               {/* </span> */}
           </div>
            <div className="projects-wrapper">
            
                {/* {inProgressProjects.map( project => <ProjectDetail key={project.id} {...project}/> )} */}

                {/* <h3 className="text projects-headers">Completed Works</h3> */}
                {projects.map( project => <ProjectDetail key={project.id} {...project} /> )}
            </div>
       </React.Fragment>
    )
}

export default Projects 