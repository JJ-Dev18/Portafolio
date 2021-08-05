import React,{useContext} from 'react'
import { Context } from "../context/Context";
import Logo from '../images/logo.png'
import {projectsData} from '../data/projectsData'
// import Gift from '../images/gifs/Gift.gif'
// import Heroes from '../images/gifs/Heroes.gif'
// import Journal from "../images/gifs/Journal.gif";
// import SweetShop from "../images/gifs/SweetShop.gif";
// import Matrix from "../images/gifs/Matrix.gif";
// import Social from "../images/gifs/Social.gif";
import { openPortafolio } from '../actions/portfolio';
import { Project } from './Project';
import { Navbar } from './Navbar';

export const ProjectsScreen = () => {

    const { dispatch } = useContext(Context);
    
    const handleCerrarPort = () => {
      dispatch(openPortafolio())
    }
    const projects = projectsData;
   
  return (
    <div className="content_projects">
      <div className="content_projects-title">
        <img src={Logo} onClick={handleCerrarPort} alt="logo" />
        <h1>Projects</h1>
      </div>
      <div className="grid_projects">
        {projects.map((project) => (
          <Project key={project.nombre} project={project} />
        ))}
      </div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="About" tercero="Contact" />
      </div>
    </div>
  );
}
