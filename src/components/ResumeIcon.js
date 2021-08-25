import React from 'react'
import resumeScroll from '../images/resumescroll.png'
// add: 'https://madhatter.dev/' to resume link for deployment on GitHub
const ResumeIcon = ()=>{
    return(
        <a  href={"https://madhatter.dev/will-ley-resume.pdf"} alt="Resume PDF" target="_blank" rel="noopener noreferrer" className="resume-icon-wrapper">
            <img className="resume-icon" src={resumeScroll} alt="Resume Scroll Icon" />
        </a>
    )
}

export default ResumeIcon