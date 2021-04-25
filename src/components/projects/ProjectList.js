import * as React from 'react';
import { projects } from './ProjectData'
import Project from './Project'

import './projects.css'

const ProjectList = () => {
  return (
    <div>
      {projects.map(project => <Project key={project.id} details={project} />)}
    </div>
  )
}

export default ProjectList;