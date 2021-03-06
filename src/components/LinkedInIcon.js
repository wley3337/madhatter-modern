import React from 'react'
import linkedIn from '../images/linkedInSketch.png'

const LinkedInIcon = () =>{
    return(  
        <a  href={"https://www.linkedin.com/in/wley3337/"} alt="Linked In Profile" target="_blank" rel="noopener noreferrer" className="linked-in-wrapper">
                <img className="linked-in-icon" src={linkedIn} alt="Linked In icon" />
        </a>
    ) 
}

export default LinkedInIcon