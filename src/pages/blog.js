import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {DATA} from '../components/data-fetch'
import SEO from '../components/seo'

function Blog() {
    const data = DATA("blog-articles?_sort=date:DESC")
    console.log(data)
    return (
    <div className="flex justify-center items-center flex-col">
        <SEO 
        title="Blog Articles"
        description="A series of blog articles written by Tony Ingall (TONYCRE8), discussing various aspects of web and design, as well as other topics."
        pathSlug="blog/"
        />
        <h1 className="text-4xl my-4">Blog posts</h1>
        <hr className="border-purple-300 w-5/6 border-1"></hr>
        {data.map(article => (
            <Link to={"/blog/" + article.slug} className="flex w-1/2 justify-center flex-row max-w-4xl shadow-md my-2 px-8 hover:scale-105 transform duration-150">
                <div className="w-full">
                    <h2 className="text-3xl justify-start">{article.title}</h2>
                    <p className="justify-start">{article.date}</p>
                </div>
                <img className="m-2 w-1/2 justify-end" src={`http://localhost:1337${article.thumbnail.formats.small.url}`} alt={article.thumbnail.alternativeText}/>
            </Link>
        ))}
    </div>    
    )
}

export default Blog