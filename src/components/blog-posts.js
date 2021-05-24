import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function BlogPosts() {

    /* const [articles, setArticles] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:1337/blog-articles/')
        .then(response => {
            setArticles(response.data)
        })
        .catch(console.error)
    }, []) */

    return (
    <>
        <h1>Blog posts code</h1>
        {/* {articles.map(article => (
            <Link to={"/blog/:" + article.slug} key={article.id}>
                <h2>{article.title}</h2>
                <img className="m-2 h-52" src={`http://localhost:1337${article.thumbnail.formats.small.url}`} alt={article.thumbnail.alternativeText}/>
                <p>{article.date}</p>
            </Link>
        ))} */}
    </>    
    )
}

export default BlogPosts