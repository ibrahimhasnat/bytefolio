import * as React from 'react';
import ProjectList from '../components/projects/ProjectList';
import Layout from '../components/layout';

const Projects = () => {

  return (
    <Layout>
      <div className="project-section">
        <div className="project-section-head">
          <h2>My Projects</h2>
          <h4>Here is the list of all of my billion-dollar projects.</h4>        
        </div>
        <ProjectList />        
      </div>
    </Layout>
  )

}

export default Projects;