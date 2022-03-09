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
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Weather-station" target="_blank">
                            <div className='project' id='weather'>
                                <div className='title-container'>
                                    <h2 className='Project-title'>Weather Watchers</h2>
                                </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Password-generator" target="_blank">
                        <div className='project' id='password'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Password Generator</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Regex-tutorial" target="_blank">
                        <div className='project' id='regex'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Regex tutorial</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/portfolio-generator" target="_blank">
                        <div className='project' id='portfolio-image'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Portfolio Generator</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/git-it-done" target="_blank">
                        <div className='project' id='coding'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Git it done</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/zookeepr" target="_blank">
                        <div className='project' id='zoo'>
                            <div className='title-container'>
                                <h2 className='Project-title'>zookeepr</h2>
                            </div>
                        </div>
                     </a>
                </li>                        
            </ul>
        </div>
    );
}

export default Portfolio;