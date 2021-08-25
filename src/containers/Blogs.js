import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { blogsArray } from '../enumerables/blogObj'
import mhBlogsWCard from '../images/mh-w-blogs.png'

const Blogs =() =>{
    return(
        <div className="blogs-wrapper">
            <div className="blog-title-wrapper">
                <span className="blog-second-img">
                <img src={mhBlogsWCard} alt="Mad Hatter Running with Crumpet and Blog Hat Card" />
                </span>
            </div>
            <div className="blogs-details-wrapper">
                {blogsArray.map( blog => <BlogDetail key={blog.id} {...blog} /> )}
            </div>
        </div>
    )
}

export default Blogs 