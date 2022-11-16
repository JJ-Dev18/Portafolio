import React, { useState,useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Project } from '../Project';


export const ProjectsScreen = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, data } = useFetch(
    "https://apiportafoliojj.herokuapp.com/api/projects"
  );
  const [showProject, setshowProject] = useState(false);
  const [projects, setprojects] = useState([]);
  const token = localStorage.getItem("token");

  const openProject = (project) => {
   
     navigate(`/admin/project/${project._id}}`, { state: project });
  };
  useEffect(() => {
    if (!loading) {
      setprojects(data.projects);
    }
  }, [loading]);
  const deleteP = (project) => {
    fetch(
      `https://apiportafoliojj.herokuapp.com/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          "x-token": token,
        },
      }
    )
      .then((resp) => resp.json())
      .then((res) => {
        alert.error("delete success");
      })
      .catch((err) => console.log(err));

    setprojects(projects.filter((pro) => pro._id !== project._id));
  };
  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  return (
    <>
      <div className="content_projects">
        {!loading && projects.length == 0 ? (
          <h1>There aren't Projects</h1>
        ) : (
          projects.map((project) => <Project project={project}   onClick={() => openProject(project)}/>)
        )}
      </div>
    </>
  );
};
