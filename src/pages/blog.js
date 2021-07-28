import React from 'react'
import {Link} from 'react-router-dom'
import {DATA} from '../components/data-fetch'
import SEO from '../components/seo'

function Blog() {
    const data = DATA("blog-articles?_sort=date:DESC")
    return (
    <div className="flex justify-center items-center flex-col">
        <SEO 
        title="Blog Articles"
        description="A series of blog articles written by Tony Ingall (TONYCRE8), discussing various aspects of web and design, as well as other topics."
        pathSlug="blog/"
        />
        <h1 className="text-4xl md:my-4 my-2 mt-16">Blog posts</h1>
        <hr className="border-purple-300 w-5/6 border-1"></hr>
        {data.map(article => (
            <Link key={article.id} to={"/blog/" + article.slug} className="flex md:w-1/2 w-5/6 justify-center md:flex-row flex-col-reverse h-full max-w-4xl shadow-md my-2 px-8 hover:scale-105 transform duration-150">
                <div className="w-full">
                    <h2 className="md:text-3xl text-2xl justify-start">{article.title}</h2>
                    <p className="justify-start">{article.date}</p>
                </div>
                <img className="m-2 md:w-1/2 w-full h-full justify-end" src={`${process.env.REACT_APP_API_URL}${article.thumbnail.formats.small.url}`} alt={article.thumbnail.alternativeText}/>
            </Link>
        ))}
    </div>    
    )
}

export default Blog