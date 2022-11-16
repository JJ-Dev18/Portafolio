import React,{useContext,useEffect,useState} from 'react'
import { Context } from "../context/Context";
import Logo from '../images/logo.png'
import {projectsData} from '../data/projectsData'
import { motion } from "framer-motion";

import { Project } from './Project';
import { Navbar } from './Navbar';
import { useFetch } from '../hooks/useFetch';

export const ProjectsScreen = () => {
  // const [search, setSearch] = useState("");
  // const handleCerrarPort = () => {
  //   dispatch(openPortafolio())
  // }
  const { dispatch } = useContext(Context);
  const [current, setCurrent] = useState(0);
  const [projects, setprojects] = useState([]);
 
  const { loading, data } = useFetch(
    "https://apiportafoliojj.herokuapp.com/api/projects"
  );
  
  useEffect(() => {
    if(!loading){
      setprojects(data.projects)
    }
  }, [loading])

  console.log(projects)
  
  const filterProjects = () => {
    // if (search.length === 0)
    return projects.slice(current, current + 6);

    // const filtered = projects.filter((project) => project.name.includes(search));
    // return filtered.slice(currentPage, currentPage + 5);
  };
  const nextPage = () => {
    if (projects.length > current + 6) setCurrent(current + 6);
  };
  const prevPage = () => {
    if (current > 0) {
      setCurrent(current - 6);
    }
  };
  // const onSearchChange = ({ target }) => {
  //   setCurrent(0);
  //   setSearch(target.value);
  // };

  return (
    <div className="content_projects">
      <motion.div
        className="content_projects-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <img src={Logo} alt="logo" />
        <h1>Projects</h1>
      </motion.div>
      <div className="grid_projects">
        {!loading &&
          filterProjects().map((project) => (
            <Project key={project.nombre} project={project} />
          ))}
      </div>
      <motion.div
        className="navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <i className="fas fa-arrow-circle-left" onClick={prevPage}></i>
        <i className="fas fa-arrow-circle-right" onClick={nextPage}></i>
      </motion.div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="About" tercero="Contact" />
      </div>
    </div>
  );
}
