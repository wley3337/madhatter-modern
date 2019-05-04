import React from 'react'

const BlogDetail = ({title, desc, link}) =>{
    return (
        <div className="blog-detail-wrapper">
            <div className="blog-detail-header">
                <a href={link} alt="blog article" target="_blank" rel="noopener noreferrer" className="blog-detail-title text">
                    {title}
                </a> 
            </div>
            <p className="blog-detail-desc">{desc}</p>
        </div>
    )
}

export default BlogDetail
 