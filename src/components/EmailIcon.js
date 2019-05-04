import React from 'react'
import emailIcon from '../images/mail.png'

const EmailIcon = () =>{
    return (
        <a className="contact-email text" href={"mailto: will.ley@madhatter.dev"} alt="email">
            <div className="email-icon-wrapper">
                <img className="email-icon" src={emailIcon} alt="Email Icon"/>
                <p className="text email-icon-label">will.ley@madhatter.dev</p>
            </div>
        </a>
    )
    
    
}

export default EmailIcon