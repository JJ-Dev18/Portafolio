import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import Logo from "../images/logo.png";
import { motion } from "framer-motion";

import { Project } from "./Project";
import { Navbar } from "./Navbar";
import { useFetch } from "../hooks/useFetch";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProjectsScreen = () => {
  // const [search, setSearch] = useState("");
  // const handleCerrarPort = () => {
  //   dispatch(openPortafolio())
  // }
  // const { dispatch } = useContext(Context);
  const [current, setCurrent] = useState(0);
  const [projects, setprojects] = useState([]);
  const [cantProjects,setCantProjects] = useState(9)
  const [page, setPage] = useState(1)
  const { loading, data } = useFetch(`${process.env.REACT_APP_API_URL}/projects`);

  useEffect(() => {
    if (!loading) {
      setprojects(data.projects);
    }
  }, [loading, data]);

  console.log(projects);

  const filterProjects = () => {
    // if (search.length === 0)
    return projects.slice(current, current + cantProjects);

    // const filtered = projects.filter((project) => project.name.includes(search));
    // return filtered.slice(currentPage, currentPage + 5);
  };
  const nextPage = () => {
    if (projects.length > current + cantProjects){
      setCurrent(current + cantProjects);
      setPage(page + 1 )
    }
  };
  const prevPage = () => {
    if (current > 0) {
      setCurrent(current - cantProjects);
      setPage(page - 1)
    }
  };
  // const onSearchChange = ({ target }) => {
  //   setCurrent(0);
  //   setSearch(target.value);
  // };

  return (
    <>
      <div
        className="navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <i className="fas fa-arrow-circle-left" onClick={prevPage}></i>
        {!loading && (
          <p>
            Page {page} de {Math.ceil(data?.projects.length / cantProjects)}
          </p>
        )}
        <i className="fas fa-arrow-circle-right" onClick={nextPage}></i>
      </div>
      <div className={`content_projects ${cantProjects > 6 && "scroll"}`}>
        <div
          className="content_projects-title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <Link end="true" to={`../home`}>
            <img src={Logo} alt="logo" />
          </Link>
          <h1>Projects</h1>
        </div>
        <div className="grid_projects">
          {!loading ? (
            filterProjects().map((project) => (
              <Project key={project.nombre} project={project} />
            ))
          ) : (
            <Skeleton numProyectos={cantProjects} />
          )}
          {/* <Skeleton /> */}
        </div>

        <div className="content_projects_nav">
          <Navbar primer="Home" segundo="About" tercero="Contact" />
        </div>
      </div>
    </>
  );
};
