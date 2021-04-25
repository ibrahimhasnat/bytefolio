import * as React from 'react';
import HeaderHome from './HeaderHome';
import './home.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

const Home = () => {
  return (
    <React.Fragment>
      <div className='browser'>
        <div className="browser-head">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="address-bar">
            <input type="text" placeholder="https://ibrahimhasnat.com" disabled/>
          </div>
        </div>
        <div className="profile-info">
          <StaticImage className="profile-img" src="../../images/elonmusk.jpg" alt="Downloaded from Google" />
          <div className="profile-desc">
            <h2>Mlon Eusk <br/><span>Software Engineer</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas hic, doloremque assumenda adipisci laboriosam mollitia enim exercitationem nesciunt possimus fugiat maiores cupiditate vel nemo corrupti odio quod consequatur atque voluptas.</p>
            <Link className="btn-default btn-dark" to="/projects">Vew My Projects</Link>  
          </div>
          <div className="social-links">
            <Link to="#"><FiTwitter /></Link>
            <Link to="#"><FiInstagram /></Link>
            <Link to="#"><FiGithub /></Link>
            <Link to="#"><FiLinkedin /></Link>
            <Link to="#"><FiYoutube /></Link>
          </div>        
        </div>       
      </div>
      <HeaderHome />
    </React.Fragment>
  )
}

export default Home;