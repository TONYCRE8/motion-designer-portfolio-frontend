import React, {useEffect, useState} from 'react'
import axios from 'axios'

function BlogArticle() {

    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/blog-articles/')
        .then(response => {
            setBlogs(response.data)
        })
    }, [])

    return (
    <>
        <h1>Blog article code</h1>
        {Blogs.map(blog => (
            <div key={blog.id}>
                <img className="m-2 h-52" src={`http://localhost:1337${blog.thumbnail.formats.small.url}`} alt={blog.thumbnail.alternativeText}/>
                <h2>{blog.title}</h2>
                <p>{blog.date}</p>
                <section dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        ))}
    </>    
    )}

export default BlogArticle
