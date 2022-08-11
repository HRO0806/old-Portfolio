import React from 'react';
import './Portfolio.css';

function Portfolio() {

    return(
        <div label="portfolio" className="portfolio">
            <div className='portfolio-title-container'>
                <h1 className='portfolio-title'>Portfolio</h1>
            </div>
            <ul className='portfolio-list'>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Henry-Chat" target="_blank">
                            <div className='project' id='social'>
                                <div className='title-container'>
                                    <h2 className='Project-title'>Henry Chat</h2>
                                </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: node.JS, MongoDB, npm, express.js<br></br>
                             <br></br>
                             Henry Chat allows me to showcase my skills as a developer as well as 
                             a place where future employers can see what I am all about.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://hro0806.github.io/Password-generator/" target="_blank">
                        <div className='project' id='password'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Password Generator</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: JavaScript, HTML, CSS<br></br>
                             <br></br>
                             Password Generator solves the problem of comming up with
                              new, unique, and secure passwords. You can choose which type of 
                              characters to include as well the length of your password.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Regex-tutorial" target="_blank">
                        <div className='project' id='regex'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Regex tutorial</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: Markdown<br></br>
                             <br></br>
                             My Regex tutorial is tutorial on the basics of Regex. I teach about all the
                             diferent parts of a regex by breaking down a regex designed to find a 
                             hex-value.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/portfolio-generator" target="_blank">
                        <div className='project' id='portfolio-image'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Portfolio Generator</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: Node.js, npm, JavaScript, HTML, CSS, Markdown<br></br>
                             <br></br>
                            Portfolio generator solves the problem of starting your
                             online portfolio with a blank slate. It provides you with prompts
                             through the terminal on your local computer and then gives you a
                             draft of a good online portfolio.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://hro0806.github.io/git-it-done/" target="_blank">
                        <div className='project' id='coding'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Git it done</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: JavaScript, HTML, CSS<br></br>
                             <br></br>
                             "Git it done" solves the problem of trying to find GitHub 
                             projects to contribute to. It allows you to search by user or by 
                             technologies used.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://thawing-atoll-05671.herokuapp.com/" target="_blank">
                        <div className='project' id='zoo'>
                            <div className='title-container'>
                                <h2 className='Project-title'>zookeepr</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: JavaScript, HTML, CSS, Node.js, Express.js<br></br>
                             <br></br>
                             Zookeepr is an app which is designed to help zoos organize their animals and employees.
                             It allows you to add or delete animals or employees as well as search information on the animals and employees.
                         </p>
                     </div>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://group2-ontrack.herokuapp.com/" target="_blank">
                        <div className='project' id='team'>
                            <div className='title-container'>
                                <h2 className='Project-title'>OnTrack</h2>
                            </div>
                        </div>
                     </a>
                     <div className="project-info-container">
                         <p className="project-info">
                             <h4>Info:</h4>
                             Technologies used: React, Javasript, Node.js, npm, MongoDB, GraphQL<br></br>
                             <br></br>
                             Ontrack solves alot of organization and team managment problems
                             you might find with a group working on a coding project. We use
                             an API which allows to get information from specific repositories
                             We then display that information in an easy to digest way.
                         </p>
                     </div>
                </li>                        
            </ul>
        </div>
    );
}

export default Portfolio;