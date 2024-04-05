import React from 'react';
import  { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faBehance, faLinkedinIn, faGithubAlt, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className='header w-100 d-flex'>
      <div className='w-50 header__info position-relative'>
            <h2 className='text-center'>Ziad Abuzayyad</h2>
            <span className='position-absolute w-75'>
            <h1 className='text-center'>Front End Developer</h1>
            <h3>Responsible for developing and implementing user interface components using React js with good experience in HTML, SCSS and Javascript </h3>
            <h4 className='header__info--link'>Download Resume</h4>
            <div className='hover-style'></div>
            </span>
      </div>
      <div className='w-50 header__menu position-relative'>
      <div className='header__menu--menu'><FontAwesomeIcon icon={faBars} /></div>
      <section className='text-center iconpart'>
      <FontAwesomeIcon icon={faTwitter}  onClick={()=> window.open("https://twitter.com/ziad_24389", "_blank")} />
      <FontAwesomeIcon icon={faLinkedinIn} onClick={()=> window.open("https://jo.linkedin.com/in/ziad-abuzayyad-03a2b536", "_blank")} />
      <FontAwesomeIcon icon={faYoutube} onClick={()=> window.open("https://www.youtube.com/", "_blank")} />
      <FontAwesomeIcon icon={faBehance} onClick={()=> window.open("https://www.behance.net/ziadmabuzayyad", "_blank")} />
      <FontAwesomeIcon icon={faGithubAlt} onClick={()=> window.open("https://github.com/", "_blank")} />
</section>
      <span className='position-absolute w-75'>
            <h1 className='text-center'>UX & UI Designer</h1>
            <h3>Responsible for the design and implementation of all the experiences a user has when interacting with a digital tool, such as a website</h3>
            <h4 className='header__menu--link' onClick={()=> window.open("https://www.youtube.com/", "_blank")}>Youtube channel</h4>
            <div className='hover-style-two'></div>
            </span>
      </div>
      </header>
 )

    }
}

export default Header;
