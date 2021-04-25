import * as React from 'react';
import { Link } from 'gatsby'

import { FiGithub, FiEye } from 'react-icons/fi'

const Project = ({details: {name, desc, demo, link, stack}}) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>

      <div className="project-links">
        <Link className="btn-default" to=""><FiGithub /> Github Link</Link>
        <Link className="btn-default btn-dark" to=""><FiEye /> View Demo</Link>       
      </div>
      <div className="stack">
        <h4>Tech Stack</h4>
        <div>
          {stack.map(el => <span>{el}</span>)}          
        </div>
      </div>    
    </div>
  )
}

export default Project;