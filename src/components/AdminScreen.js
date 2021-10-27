import React,{useContext} from 'react'
import { loggoutAdmin } from '../actions/auth'
import { Context } from '../context/Context'
import { useFetch } from '../hooks/useFetch'



export const DashBoardAdmin = () => {
  return (
    <AdminScreen>
      <Projects/>
    </AdminScreen>
  )
}
 

export const Projects = () => {

  const { loading, data } = useFetch("https://apiportafoliojj.herokuapp.com/api/projects");
  if(loading){
   return (
      <>
      <h1>Cargando...</h1>
      </>
   )
  }
  return (
    <>
      <h1>Projects</h1>
      <div className="content__admin__projects">
        {data.projects.map((project) => (
          <div className="project__card" key={project._id}>
            <h1>{project.nombre}</h1>
          </div>
        ))}
      </div>
    </>
  );
}


export const FormProjects = () => {
  return (
    <>
      <form className="form__project">
         <h1>Projects</h1>
        <input type="text" className="input__form" />
        <input type="text" className="input__form" />
      </form>
    </>
  );
}


export const AdminScreen = ({children}) => {
  const {estado,dispatch} = useContext(Context)
  const loggout = () => {
    dispatch(loggoutAdmin())
    localStorage.removeItem('logged')
  }
  return (
    <div style={{display:'flex'}}>
      <aside className="drawer">
        <h1>Admin JJ</h1>
        <ul>
          <li>
            <i className="fas fa-chalkboard"></i>
            Projects
          </li>
          <li>
            <i className="fas fa-cogs"></i>Technologies
          </li>
        </ul>
        <button className="button button__uno" onClick={loggout}>
          Loggout
        </button>
      </aside>
      <main className="main__admin">
        {children}
      </main>
    </div>
  );
}
