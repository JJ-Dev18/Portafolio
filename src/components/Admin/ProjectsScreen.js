import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Project } from "../Project";

export const ProjectsScreen = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, data } = useFetch(`${process.env.REACT_APP_API_URL}/projects`);
  const [projects, setprojects] = useState([]);
  const token = localStorage.getItem("token");

  const openProject = (project) => {
    navigate(`/admin/project/${project._id}}`, { state: project });
  };
  useEffect(() => {
    if (!loading) {
      setprojects(data.projects);
    }
  }, [loading, data]);
  const deleteP = (project) => {
    fetch(`${process.env.REACT_APP_API_URL}/projects/${project._id}`, {
      method: "DELETE",
      headers: {
        "x-token": token,
      },
    })
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
        <h1>Loading ...</h1>
      </>
    );
  }
  return (
    <>
      <div className="content_projects_admin">
        {!loading && projects.length === 0 ? (
          <h1>There aren't Projects</h1>
        ) : (
          projects.map((project) => (
            <div className="content__card" key={project._id}>
              <div
                className="project__card"
                onClick={() => openProject(project)}
              >
                <ul className="tecnologias">
                  {project.tecnologias.map((tec, index) => (
                    <li key={tec._id}>
                      <img src={tec.img} alt="tecnologias usadas" />
                    </li>
                  ))}
                </ul>
                <img src={project.img} alt="" width="50%" />
                <h1>{project.nombre}</h1>
              </div>
              <button onClick={() => deleteP(project)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};
