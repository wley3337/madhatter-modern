import React from 'react'
import emailIcon from '../images/mailSketch.png'

const EmailIcon = () =>{
    return (
        <a className="email-icon-wrapper text" href={"mailto: will.ley@madhatter.dev"} alt="email" >
                <img className="email-icon" src={emailIcon} alt="Email Icon"/>
        </a>
    )
}

export default EmailIcon