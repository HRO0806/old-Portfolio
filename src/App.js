import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Cube from './images/cubes.png';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const background = {
  backgroundImage: `url(${Cube})`,
  width: '100%',
  maxWidth: 'inherit',
  minHeight: '100vh',
  backgroundPosition: 'absolute'
}

function App() {
  return (
    <div style={background}>
        <BrowserRouter>
          <div>
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
          </Switch>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
    </div>    
  );
}

export default App;
