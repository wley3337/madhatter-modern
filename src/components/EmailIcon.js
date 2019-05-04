import React from 'react'
import emailIcon from '../images/mail.png'

const EmailIcon = () =>{
    return (
        <a className="email-icon-wrapper text" href={"mailto: will.ley@madhatter.dev"} alt="email" >
            
                <img className="email-icon" src={emailIcon} alt="Email Icon"/>
                {/* <p className="textemail-icon-label">will.ley@madhatter.dev</p> */}
    
        </a>
    )
    
    
}

export default EmailIcon