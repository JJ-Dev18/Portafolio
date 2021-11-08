import React,{useContext,useState} from 'react'


export const ProjectAdmin = (props) => {
  return (
    <>
      {props.showProject && props.onUpdate()}
    </>
  )
}


export const PaginaPortafolio = () => {
  return (
    <>
      <iframe width="100%" height="100%" src="https://jj-dev18.github.io/Portafolio/"></iframe>
    </>
  );
}


