import React, {useEffect, useState} from 'react'
import axios from 'axios'


function DesignProject() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:1337/design-projects/')
    .then(response => {
      setProjectData(response.data)
    })
  }, []) 
  return (
    <div>
      <ul>
        {projectData.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <img src={`http://localhost:1337${project.thumbnail.formats.small.url}`} alt={project.thumbnail.alternativeText}/>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesignProject