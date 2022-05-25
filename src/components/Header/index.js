import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="header">
            <Link className="nav-item" label="about" to="/"><h1>Henry's Internet Corner</h1></Link>
            <ul className={ListGroup} id='nav-list'>
                <li className={ListGroupItem} id='animate-one'>
                    <Link className="nav-item" label="about" to="/">About Me</Link>
                </li>
                <li className={ListGroup} id='nav-list'>
                    <Link className="nav-item" label="skills" to="/skills">Skills</Link>
                </li>    
                <li className={ListGroupItem} id='animate-two'>
                    <Link className="nav-item" label="portfolio" to="/portfolio">Portfolio</Link>
                </li>
                <li className={ListGroupItem} id='animate-three'>
                    <Link className="nav-item" label="contact" to="/contact">Contact me</Link>
                </li>
                <li className={ListGroupItem} id='animate-four'>
                    <Link className="nav-item" label="resume" to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;