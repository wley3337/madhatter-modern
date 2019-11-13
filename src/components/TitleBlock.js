import React from 'react'
import MadHatterWelcome from '../images/mh-main-with-text.png'
import IconWrapper from '../containers/IconWrapper';

const TitleBlock = ()=>{
    return(
        <div className="title-block-wrapper">
            <span className="title-img-wrapper">
                <img src={MadHatterWelcome} alt="Mad Hatter at tea" className="title-img"/>
                {/* <h1 className="do-title mh-text">Do come in, won't you?</h1> */}
            </span>
            <span className="title-text-wrapper">
                <h1 className="text name-title">Will Ley</h1>
                <h3 className="welcome-text">Software developer, life long learner, and sometime thespian.</h3>
                <div className="title-icon-wrapper">
                    <IconWrapper/>
                </div>
            </span>
        </div>
    )
}

export default TitleBlock