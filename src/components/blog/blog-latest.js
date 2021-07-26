import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {DATA} from '../data-fetch'

function BlogLatest() {
    // _sort=date:DESC&_limit=1
    const data = DATA("blog-articles?_sort=date:DESC&_limit=1")
    return (
        <>
            {data.map(article => (
            <Link to={"/blog/" + article.slug} key={article.id} className="flex justify-center flex-col p-4">
                <img className="w-2/3 justify-end" src={`http://localhost:1337${article.thumbnail.formats.small.url}`} alt={article.thumbnail.alternativeText}/>
                <div>
                    <h3 className="justify-start leading-tight text-3xl">{article.title}</h3>
                    <p className="justify-start">{article.date}</p>
                </div>
            </Link>
            ))}
        </>
    )
}

export default BlogLatest