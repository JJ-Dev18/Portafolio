import React from 'react'

const projectImg = require.context("../images/gifs",true)
console.log(projectImg)
export const Project = ({project}) => {
  
  return (
    <div className="content_project" id={project.imgId}>
      <img
        src={projectImg(`./${project.img}.gif`).default}
        alt="gif de proyecto"
      />
      <div className="info_project">
        <h1>{project.nombre} </h1>
        <div className="info_project_enlaces">
          <a href={project.website} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
            WEBSITE
          </a>
          <a href={project.codigo} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
            Codigo
          </a>
        </div>
      </div>
    </div>
  );
}
