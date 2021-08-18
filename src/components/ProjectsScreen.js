import React,{useContext,useState} from 'react'
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
    const [current, setCurrent] = useState(0)
    const [search, setSearch] = useState("");
    const handleCerrarPort = () => {
      dispatch(openPortafolio())
    }
       const projects = projectsData;
    const filterProjects = ()=> {

        // if (search.length === 0)
         return projects.slice(current, current + 6);

        // const filtered = projects.filter((project) => project.name.includes(search));
        // return filtered.slice(currentPage, currentPage + 5);
    }
    const nextPage = () => {
      if(projects.length > current + 6 )
        setCurrent(current+6)
    }
    const prevPage = () => {
       if(current > 0){
         setCurrent(current - 6 );
       }
    }
    // const onSearchChange = ({ target }) => {
    //   setCurrent(0);
    //   setSearch(target.value);
    // };
    
 
    console.log(filterProjects())
  return (
    <div className="content_projects">
      <div className="content_projects-title">
        <img src={Logo} onClick={handleCerrarPort} alt="logo" />
        <h1>Projects</h1>
      </div>
      <div className="grid_projects">
        {filterProjects().map((project) => (
          <Project key={project.nombre} project={project} />
        ))}
      </div>
      <div className="navigation">
        <i class="fas fa-arrow-circle-left" onClick={prevPage}></i>
        <i class="fas fa-arrow-circle-right" onClick={nextPage}></i>
      </div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="About" tercero="Contact" />
      </div>
    </div>
  );
}
