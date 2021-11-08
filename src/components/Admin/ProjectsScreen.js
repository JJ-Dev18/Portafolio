import React, { useState,useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useFetch } from '../../hooks/useFetch';


export const ProjectsScreen = ({ history }) => {
  const alert = useAlert();

  const { loading, data } = useFetch(
    "https://apiportafoliojj.herokuapp.com/api/projects"
  );
  const [showProject, setshowProject] = useState(false);
  const [projects, setprojects] = useState([]);
  const token = localStorage.getItem("token");

  const openProject = (project) => {
    history.push({
      pathname: `/admin/project/${project._id}`,
      data: project, // your data array of objects
    });
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
      <div className="content__admin__projects">
        {!loading && projects.length == 0 ? (
          <h1>There aren't Technologies</h1>
        ) : (
          projects.map((project) => (
            <div className="content__card" key={project._id}>
              <div
                className="project__card"
                onClick={() => openProject(project)}
              >
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
