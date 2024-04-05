
import React from 'react';
import { Component } from 'react';
import './What-can-do.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faBehance, faLinkedinIn, faGithubAlt, faYoutube, faHtml5, faSass, faJs, faReact, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons';

class WhatCanIdo extends Component {
        props:any;
    render() {
        return ( 
            <div className ='container-fluid ido'>
            <div className = 'row'>
            <div className = 'col-md-3'>
            <h2>Ziad Abuzayyad</h2>
            <div className='ido__face'>
            <section className='text-center ido__face--iconpart'>
                <FontAwesomeIcon icon={faTwitter}  onClick={()=> window.open("https://twitter.com/ziad_24389", "_blank")} />
                <FontAwesomeIcon icon={faLinkedinIn} onClick={()=> window.open("https://jo.linkedin.com/in/ziad-abuzayyad-03a2b536", "_blank")} />
                <FontAwesomeIcon icon={faYoutube} onClick={()=> window.open("https://www.youtube.com/", "_blank")} />
                <FontAwesomeIcon icon={faBehance} onClick={()=> window.open("https://www.behance.net/ziadmabuzayyad", "_blank")} />
                <FontAwesomeIcon icon={faGithubAlt} onClick={()=> window.open("https://github.com/", "_blank")} />
            </section>
            </div>
            <p>I am a 35 years old investment analyst and travel enthusiast. Presently I am working for CSE,
                a Edinburgh based Investment Bank. I have done my MSc in Economics & Finance from Havard. I live
                in Musselburgh with my wife and daughter.</p>
            </div> 
            <div className='col-md-9 canIdo'>
                <h3>What I Can Do</h3>
                <div className='canIdo__sep'></div>

                <div className="row mt-5">
                    <div className="col-md-1"><FontAwesomeIcon icon={faHtml5} /></div>
                    <div className="col-md-11">
                        <h3>HTML5</h3>
                        <p>Use new semantic HTML5 tags in a web page creation and how to make content more informative for allowing browsers and search engines to better interpret content</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-1"><FontAwesomeIcon icon={faSass} /></div>
                    <div className="col-md-11">
                        <h3>CSS & SASS</h3>
                        <p>Build awesome web SITE with modern languge style, responsive design and media queries with BEM SASS architecture</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-1"><FontAwesomeIcon icon={faBootstrap} /></div>
                    <div className="col-md-11">
                        <h3>Bootstrap</h3>
                        <p>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-1"><FontAwesomeIcon icon={faJs} /></div>
                    <div className="col-md-11">
                        <h3>Javascript</h3>
                        <p>Add flavor to the website with ES6 and modern Javascript, DOM manipulation and fetch API </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-1"><FontAwesomeIcon icon={faReact} /></div>
                    <div className="col-md-11">
                        <h3>ReactJS</h3>
                        <p>building user interfaces specifically for single-page applications, state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-1"><FontAwesomeIcon icon={faNpm} /></div>
                    <div className="col-md-11">
                        <h3>NPM</h3>
                        <p>package manager for the JavaScript programming language, to publish, discover, install, and develop node programs</p>
                    </div>
                     </div>
                </div>   
            </div>
             </div>
        )
    }
}

export default WhatCanIdo;

