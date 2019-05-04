import React from 'react'
import GitHubIcon from '../components/GitHubIcon'
import LinkedInIcon from '../components/LinkedInIcon'
import EmailIcon from '../components/EmailIcon'


const ContactIcons = () =>{
    return(
        <div className="contact-wrapper">
            <h1 className="contact-header">Please keep in touch!</h1>
            <div className="contact-icon-wrapper">
                <GitHubIcon />
                <LinkedInIcon />
                <EmailIcon/>
            </div>
        </div>
    )
}

export default ContactIcons