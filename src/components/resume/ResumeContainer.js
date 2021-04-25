import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FiGlobe, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

import './resume.css';
import { Link } from 'gatsby';

const ResumeContainer = () => {
  return (
    <div className="container">

      <div className="resume-head">
        <div className="short-bio">
          <div>
            <StaticImage className="profile-img" src="../../images/elonmusk.jpg" alt="Profile Image" />
            <h2>Mlon Eusk</h2>
          </div>
          <h4>There is nothing to explain about me. I am an overqualified person for the earth. That's why I am planning to go to the Mars.</h4>
        </div>
        <div className="important-links">
          <span><FiMapPin style={{ color: '#4285F4' }} /> City, Country</span>
          <span><FiMail style={{ color: '#DB4437' }} /> email@domain.com</span>
          <span><FiGlobe style={{ color: '#F4B400' }} /> https://mydomain.com</span>
          <span><FiLinkedin style={{ color: '#0F9D58' }} /> https://linkedin.com/</span>
        </div>
      </div>

      <div className="resume-cards">

        <div className="resume-card">
          <h2 style={{ color: '#4285F4' }}>Education</h2>
          <div className="edu-list">
            <div>
              <h4>Stanford University</h4>
              <span>Ph.D, Algorithms and Distributed Computing</span>
              <small>Apr 1900 - Apr 1900</small>
            </div>
            <div>
              <h4>Harvard University</h4>
              <span>BSc, Computer Science</span>
              <small>Apr 1900 - Apr 1900</small>
            </div>
          </div>
        </div>

        <div className="resume-card">
          <h2 style={{ color: '#DB4437' }}>Experiences</h2>
          <div className="experience-list">
            <div>
              <h4>Google</h4>
              <span>Software Engineer</span>
              <small>Apr 1900 - Current</small>
            </div>
            <div>
              <h4>Apple</h4>
              <span>Software Engineer</span>
              <small>Apr 1900 - Apr 1900</small>
            </div>
          </div>
        </div>

        <div className="resume-card">
          <h2 style={{ color: '#0F9D58' }}>Projects</h2>
          <div className="project-list">
            <div>
              <h4>Fake Social Network Site</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus vel voluptatum aliquam, aperiam incidunt eaque deleniti quisquam accusamus ex.</span>
              <Link to="/projects">View Project</Link>
            </div>
            <div>
              <h4>Fake Search Engine</h4>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sint! Neque tempora, possimus provident sunt, velit dolorum beatae dolore soluta saepe consequatur in doloremque suscipit!</span>
              <Link to="/projects">View Project</Link>
            </div>
            <div>
              <h4>Fake Music App</h4>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sint! Neque tempora, possimus provident sunt, velit dolorum beatae dolore soluta saepe consequatur in doloremque suscipit!</span>
              <Link to="/projects">View Project</Link>
            </div>
          </div>
        </div>

        <div className="resume-card">
          <h2 style={{ color: '#F4B400' }}>Skills</h2>
          <div className="skills-list">
            <div>
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
                <li>Java</li>
                <li>Kotlin</li>
              </ul>
            </div>
            <div>
              <h4>Frameworks</h4>
              <ul>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Express</li>
                <li>Django</li>
                <li>Redux</li>
              </ul>
            </div>
            <div>
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>VSCode</li>
                <li>PyCharm</li>
                <li>Trello</li>
                <li>Docker</li>
                <li>Slack</li>
              </ul>
            </div>
            <div>
              <h4>Databases</h4>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div>
              <h4>Other</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>            
          </div>
        </div>

      </div>

      <h3 style={{marginTop: '25px', opacity: '0.6'}}>Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aperiam, ut libero reiciendis, sit maxime at perspiciatis iusto amet ea dolorum illo vitae asperiores enim explicabo dolore nam praesentium cupiditate?</h3>

    </div>
  )
}

export default ResumeContainer;