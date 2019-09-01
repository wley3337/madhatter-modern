import React from 'react'
import topHatSC from '../images/topHatSketchCard.png'

const About = () =>{
    return(
        <div className="about-wrapper text">
            <div className="about-menu-card-wrapper">
                <span className="top-hat-card-wrapper">
                    <img className="menu-card top-hat-card-about" src={topHatSC} alt="About"/>
                </span>
                <p className="card-title about-title">About</p>
            </div>
            <div className="about-text-wrapper">
                <p>I came to coding through a short class a friend was offering where we taught a robot to do basic tasks using JavaScript. It was fun, engaging, and spoke to my own problem solving process – analyzing larger problems and breaking them down into discrete manageable pieces. Building solutions to complex problems in this way has always fascinated me. With this small taste of the power of coding, I was hooked.</p>
        
                <p>Coding also connects to my passion for building community and connection. As a teacher, I’d seen the incredible impact the web had on my students and their sense of belonging. It gives groups that have felt marginalized a place where they can find others like themselves – beyond the limits of their geography - to belong and develop a larger community. </p>
            </div>
        </div>
    )
}

export default About 