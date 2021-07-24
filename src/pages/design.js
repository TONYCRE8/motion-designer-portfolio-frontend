import React, { useLayoutEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import gsap from 'gsap'

import {DATA} from '../components/data-fetch'
import SEO from '../components/seo'

function Design() {
  const data = DATA("design-projects?_sort=date:DESC")

  // Could we iterate a useRef on each object and then convert those into an array?
  
  useLayoutEffect(() => {
    let projects = gsap.utils.toArray(".project")
    gsap.to(projects, {opacity: 1, duration: 1, stagger: {each: .3}})
  })

  return (
    <div className="flex justify-center items-center flex-col">
      <SEO 
        title="Design Projects"
        description="A gallery of designs produced by Tony Ingall (TONYCRE8) as a Motion Designer."
        pathSlug="design/"
      />
      <h1 className="text-4xl my-4">Design Works</h1>
      <p>Either conceptual or designs that become eventual development projects, they're all documented here.</p>
      <hr className="border-1 border-purple-300 w-5/6"></hr>
      <ul className="flex flex-row flex-wrap w-5/6 h-full">
        {data.map(project => (
          <Link to={"/design/" + project.slug} key={project.id} className="project opacity-0 flex flex-col relative w-80 h-48 max-w-sm mx-2 shadow-md my-4 hover:scale-105 transform duration-150">
            <div className="flex justify-center items-center flex-col relative z-10 h-full hover:opacity-100 opacity-0 bg-gray-800 bg-opacity-90 transition-opacity duration-200">
              <small className="text-white absolute top-4 left-2">{project.date.slice(0,4)}</small>
              <h2 className="h-1/5 text-purple-300 text-2xl p-2">{project.title}</h2>
              <hr className="border-white w-5/6"></hr>
              <p className="h-2/5 text-white p-2 text-center">{project.description}</p>
            </div>
            <div className="absolute h-full w-full">
              <img className="h-full w-full object-cover object-top" src={`http://localhost:1337${project.thumbnail.formats.medium.url}`} alt={project.thumbnail.alternativeText}/>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Design