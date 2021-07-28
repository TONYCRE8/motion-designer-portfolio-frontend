import React from 'react'
import marked from 'marked'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/a11y-dark.css' // get this to work

import { useHistory, useParams } from 'react-router'

import {DATA} from '../../components/data-fetch'
import SEO from '../../components/seo'
import '../../components/extra.css'

function BlogArticle() {
    let history = useHistory();
    const { slug } = useParams();
    const data = DATA(`blog-articles?slug=${slug}`)

    hljs.registerLanguage('javascript', javascript)

    const getMarkdownText = (data) => {
        var markup = marked(data, {baseUrl: `${process.env.REACT_APP_API_URL}`})
        return{ __html: markup}
    }
    return (
    <div className="flex justify-center flex-col items-center">
        {data.map(blog => (
            <div key={blog.id} className="md:w-1/2 w-5/6 mt-16">
                <SEO 
                    title={blog.title}
                    description={blog.description}
                    pathSlug={`blog/${blog.slug}`}
                />
                <div className="md:my-12 mb-4">
                    <img className="w-full" src={`${process.env.REACT_APP_API_URL}${blog.thumbnail.formats.small.url}`} alt={blog.thumbnail.alternativeText}/>
                    <h1 className="text-4xl mt-2">{blog.title}</h1>
                    <small>{blog.date}</small>
                    <hr className="border-1 border-purple-300 w-full"></hr>
                </div>
                <div className="content" dangerouslySetInnerHTML={getMarkdownText(blog.content)} />
            </div>
        ))}
        <button className="w-32 my-12 uppercase bg-gray-800 text-white font-inter-black py-2 rounded-md" onClick={() => history.goBack()}>Back</button>
    </div>    
    )}

export default BlogArticle