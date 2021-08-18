import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Copy } from '../components/Copy';
import { ParticleBackground } from '../components/ParticleBackground';
import { Portada } from '../components/Portada';
import { ProjectsScreen } from '../components/ProjectsScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/home" component={Portada} />
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <ParticleBackground />
        <Copy />
      </div>
    </Router>
  );
}
