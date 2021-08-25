import React from 'react'
import gitHubIcon from '../images/chesserOctocatSketch.png'

const GitHubIcon = () =>{
    return (
        <a  href={"https://github.com/wley3337"} alt="Git Hub" target="_blank" rel="noopener noreferrer" className="git-hub-wrapper">
                <img className="git-hub-icon" src={gitHubIcon} alt="Git Hub Icon" />
        </a>
    )
}

export default GitHubIcon