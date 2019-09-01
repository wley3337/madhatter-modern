import React from 'react'
import GitHubIcon from '../components/GitHubIcon'
import LinkedInIcon from '../components/LinkedInIcon'
import EmailIcon from '../components/EmailIcon'
import ResumeIcon from '../components/ResumeIcon'

const IconWrapper = () =>{
    return(
        <div className="contact-icon-wrapper">
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon/>
            <ResumeIcon/>
        </div>
    )
}

export default IconWrapper