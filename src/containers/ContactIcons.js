import React from 'react'
import mhContact from '../images/mh-contact.png'
import IconWrapper from './IconWrapper';

const ContactIcons = () =>{
    return(
        <div className="contact-wrapper">
            <span className="contact-content">
                <h1 className="contact-header">Do keep in touch!</h1>
                <IconWrapper/>
            </span>
            <span className="contact-mh-image">
                <img src={mhContact} alt="Mad Hatter Speaking" />
            </span>
        </div>
    )
}

export default ContactIcons