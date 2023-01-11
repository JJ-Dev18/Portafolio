import React ,{useState} from 'react'
import ModalProject from './ModalProject';

export const Project = ({project}) => {
  const [showModal, setshowModal] = useState(false)
  

  return (
    <>
      <div
        className="content_project"
        id={project.imgId}
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <img src={project.img} alt="Imagen de proyecto" />
        <div className="info_project">
          <button
            className="cursor_pointer"
            onClick={(e) => setshowModal(true)}
          >
            {" "}
            <h1>{project.nombre} </h1>
          </button>

          <ul className="tecnologias">
            {project.tecnologias.map((tec,index) => (
              <li key={tec._id}>
                <img
                  src={tec.img}
                  alt="tecnologias usadas"
                />
              </li>
            ))}
          </ul>
          {/* <div className="info_project_enlaces">
          <a href={project.website} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
            WEBSITE
          </a>
          <a href={project.codigo} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
            Codigo
          </a>
        </div> */}
        </div>
      </div>
      <ModalProject
        setShowModal={setshowModal}
        showModal={showModal}
        projectName={project.nombre}
        website={project.website}
        codigo={project.codigo}
        gif={project.gif}
        descripcion={project.descripcion}
      />
    </>
  );
}
