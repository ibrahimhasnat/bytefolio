import * as React from 'react';
import { Link } from 'gatsby'
import { FcHome, FcIdea, FcGraduationCap, FcPhone, FcReading } from 'react-icons/fc'

const HeaderHome = () => {

  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li><Link to="/"><FcHome /> Home</Link></li>
            <li><Link to="/projects"><FcIdea /> Projects</Link></li>
            <li><Link to="/resume"><FcGraduationCap /> Resume</Link></li>
            <li><Link to="/blog"><FcReading /> Blog</Link></li>
            <li><Link to="/contact"><FcPhone /> Contact</Link></li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )

}

export default HeaderHome;