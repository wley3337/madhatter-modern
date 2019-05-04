import React from 'react'
import gitHubIcon from '../images/chesserOctocat.png'

const GitHubIcon = () =>{
    return (
        <a  href={"https://github.com/wley3337"} alt="Git Hub" target="_blank" rel="noopener noreferrer" className="git-hub-wrapper">
            
                <img className="git-hub-icon" src={gitHubIcon} alt="Git Hub Icon" />
                {/* <p className="text git-hub-label">Git Hub</p> */}
        
        </a>
    )
}

export default GitHubIcon