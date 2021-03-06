import React from 'react'
import {useHistory, useParams} from 'react-router-dom'

import {DATA} from '../../components/data-fetch'
import SEO from '../../components/seo'

function DesignProject() {
    let history = useHistory()
    const { slug } = useParams();

    let data = DATA(`design-projects?slug=${slug}`)

    return (
        <div className="flex justify-center flex-col items-center">
            {data.map(project => (
                <div key={project.slug} className="md:w-1/2 w-5/6 mt-16 max-w-xl">
                    <SEO 
                        title={project.title}
                        description={project.description}
                        pathSlug={`design/${project.slug}`}
                    />
                    <h1 className="text-5xl my-4">{project.title} - {project.date.slice(0, 4)}</h1>
                    <p>{project.description}</p>
                    <hr className="my-4 border-1 border-purple-300"></hr>
                    <h2 className="text-2xl">Design</h2>
                    <img className="h-full w-full" src={project.thumbnail.formats.large.url} alt={project.thumbnail.alternativeText}/>
                </div>
            ))}
            <button className="w-32 my-12 uppercase bg-gray-800 text-white font-inter-black py-2 rounded-md" onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default DesignProject