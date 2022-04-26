import React from 'react';
import './Skills.css';

function Skills(){
  return(
    <div label="portfolio" className="portfolio">
      <div className={'skills-title-container'}>
        <h2 className={'skills-title'}>Skills</h2>
      </div>
      <div className={'container-container'}>
        <div className={'container-skills'}>
        <p className={'skills'}>HTML, CSS, JavaScript, node.js, Bulma, Bootstrap, SASS, express.js, Handlebars, MySql, MongoSB, React</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;