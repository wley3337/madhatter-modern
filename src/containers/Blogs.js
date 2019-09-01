import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { blogsArray } from '../enumerables/blogObj'
import  blogHatSC from '../images/reporterHatSketchCardw-blog.png'
import mhBlogs from '../images/mh-blogs.png'

const Blogs =() =>{
    return(
        <div className="blogs-wrapper">
            <div className="blog-title-wrapper">
                <span className="blog-second-img">
                    <img src={mhBlogs} alt="Mad Hatter Running with Crumpet" />
                </span>
                <span className="blog-title-card">
                    <img src={blogHatSC} className="menu-card blog-title" alt="Blog Hat Sketch Card"/>
                </span>
            </div>
            <div className="blogs-details-wrapper">
                {blogsArray.map( blog => <BlogDetail key={blog.id} {...blog} /> )}
            </div>
        </div>
    )
}

export default Blogs 