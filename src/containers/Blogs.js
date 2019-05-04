import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { blogsArray } from '../enumerables/blogObj'


const Blogs =() =>{
    return(
        <div className="blogs-wrapper">
            <h1 className="blogs-section-title">Blogs</h1>
            <h3 className="blog-sub-heading">(A Selection)</h3>
            <div className="blogs-details-wrapper">
                {blogsArray.map( blog => <BlogDetail key={blog.id} {...blog} /> )}
            </div>
        </div>
    )
}

export default Blogs 