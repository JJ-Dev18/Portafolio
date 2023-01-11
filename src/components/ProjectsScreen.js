import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { Navbar } from "./Navbar";
import { useFetch } from "../hooks/useFetch";
import Skeleton from "./Skeleton";

export const ProjectsScreen = () => {
  const [current, setCurrent] = useState(0);
  const [projects, setprojects] = useState([]);
  const [cantProjects,setCantProjects] = useState(6)
  const [filter, setfilter] = useState('name')
  const [page, setPage] = useState(1)
  const { loading, data } = useFetch(`${process.env.REACT_APP_API_URL}/projects`);
 
  useEffect(() => {
    if (!loading) {
      setprojects(data.projects.slice(current, current + cantProjects));
    }
  }, [loading, data,current,cantProjects]);



   const handleFilter = (e) => {
     let name = e.target.value;
     console.log(name,"name")
     if (name !== "") {
       name = name.toLowerCase();
       filter === "name"
         ? setprojects(
             data.projects.filter((project) => project.nombre.toLowerCase().includes(name))
           )
         : setprojects(
             data.projects.filter((project) => {
               let contieneTechnologia = false;
               for (var key in project.tecnologias) {
                 if( project.tecnologias[key].nombre.toLowerCase().includes(name) ){
                   contieneTechnologia = true
                 }
                 
               }
              return contieneTechnologia;
             })
           );
     } else {
        setprojects(data.projects.slice(current, current + cantProjects));
     }
   };

   console.log(current,"current")

 
  

  // }
  const nextPage = () => {
    if (data.total > current + cantProjects){
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
  const onSelected = (e) => {
    let cantidad = parseInt(e.target.value);
    setCantProjects(cantidad);
  };
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
          <div>
            <p>
              Projects per page
              <select onChange={onSelected} id="cantProjects" defaultValue={6}>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
            </p>
            <p>
              Page {page} of {Math.ceil(data?.projects.length / cantProjects)}
            </p>
          </div>
        )}

        <i className="fas fa-arrow-circle-right" onClick={nextPage}></i>
      </div>
      <div className={`content_projects scroll`}>
        <div
          className="content_projects-title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          {/* <Link end="true" to={`../home`}>
            <img src={Logo} alt="logo" />
          </Link> */}
          <h1>Projects</h1>
          <div id="content-search">
            <input
              id="search-input"
              type="text"
              onChange={handleFilter}
              placeholder="Filter by"
            />
            <select id="target" onChange={(e) => setfilter(e.target.value)}>
              <option value="name">Name</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>
        <div className="grid_projects">
          {!loading ? (
            projects.map((project) => (
              <Project key={project.nombre} project={project} />
            ))
          ) : (
            <Skeleton numProyectos={cantProjects} />
          )}
        </div>

        <div className="content_projects_nav">
          <Navbar primer="Home" segundo="About" tercero="Contact" />
        </div>
      </div>
    </>
  );
};
