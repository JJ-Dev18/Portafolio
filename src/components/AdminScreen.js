import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { loggoutAdmin } from '../actions/auth'
import { Context } from '../context/Context'
import { useFetch } from '../hooks/useFetch'
import { useAlert } from "react-alert";


export const DashBoardAdmin = () => {
   const [showProject, setshowProject] = useState(true);
  return (
    <AdminScreen setshowProject={setshowProject} showProject={showProject}>
         <ProjectAdmin 
         showProject={showProject} 
         onUpdate={()=> <ProjectsScreen/>}
         />
    </AdminScreen>
  )
}


export const ProjectAdmin = (props) => {
  return (
    <>
      {props.showProject && props.onUpdate()}
    </>
  )
}


export const Prueba = () => {
  return (
    <div>
      <h1>Prueba</h1>
    </div>
  )
}


export const ProjectsScreen = (props) => {

  const { loading, data } = useFetch("https://apiportafoliojj.herokuapp.com/api/projects");
  const [showProject, setshowProject] = useState(false)
  const [infoProject, setinfoProject] = useState('')
  
  const openProject = (project) => {
    setshowProject(true)
    setinfoProject(project)
  }
  if(loading){
   return (
      <>
      <h1>Cargando...</h1>
      </>
   )
  }
  return (
    <>
      <div className="content__admin__projects">
        {!showProject &&
          data.projects.map((project) => (
            <div
              className="project__card"
              key={project._id}
              onClick={() => openProject(project)}
            >
              <h1>{project.nombre}</h1>
            </div>
          ))}
        {showProject && <i onClick={()=> setshowProject(false)} className="fas fa-hand-point-left cursor_pointer"></i>}
        {showProject && <FormProjects {...infoProject} />}
      </div>
    </>
  );
}


export const FormProjects = (props) => {
   const alert = useAlert();
  const [disabled, setdisabled] = useState(true)
  const [nombre, setnombre] = useState(props.nombre)
  const [website, setWebsite] = useState(props.website)
  const handleInputName = ({target})=>{
     setnombre(target.value)
  }
  const handleInputWebsite = ({target})=> {
    setWebsite(target.value)
  }
  const onUpdate = (e)=>{
    e.preventDefault()
    setdisabled(!disabled)
  }
  const data = { nombre,website }
  const update =  (e)=>{
    e.preventDefault()
     fetch(`https://apiportafoliojj.herokuapp.com/api/projects/${props._id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         //TODO  COLOCAR EL TOKEN EN EL LOCALSTORAGE PARA LA VERIFICACION DE EL LOGIN
         "x-token":
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTYwODhmY2RhMzgwMDcwNGU3Y2NhODMiLCJpYXQiOjE2MzUzNTQwMzcsImV4cCI6MTYzNTM2ODQzN30.KUojhj81aUAV-zv7Fxrmp590DKM0HcE1IjPst4MtXRQ",
       },
       body: JSON.stringify(data),
     })
       .then((resp) => resp.json())
       .then((respon) => {
         setdisabled(true);
         alert.success(respon.msg);
       })
       .catch((err) => alert.error(err));
    
  }
  return (
    <>
      <form className="form__project">
        <input
          type="text"
          className="input__form"
          value={nombre}
          disabled={disabled}
          onChange={handleInputName}

        />
        <input
          type="text"
          className="input__form"
          value={website}
          disabled={disabled}
          onChange={handleInputWebsite}
        />
        <div style={{display:'flex'}}>
        <button onClick={onUpdate} className={`button ${disabled ? 'button__uno' : 'button__dos'}`}>{disabled ? 'Editar' : 'Cancelar'}</button>
        {!disabled &&  <button onClick={update} className="button button__tres">Guardar</button>}
        </div>
      
      </form>
    </>
  );
}


export const AdminScreen = ({children,setshowProject,showProject,...props}) => {
  const {estado,dispatch} = useContext(Context)
 
 
  const loggout = () => {
    dispatch(loggoutAdmin())
    localStorage.removeItem('logged')  
  }
  return (
    <div style={{ display: "flex" }}>
      <aside className="drawer">
        <h1>Admin JJ</h1>
        <ul>
          <li onClick={() => setshowProject(!showProject)}>
            <i className="fas fa-chalkboard"></i>
            Projects
          </li>
          <Link to="/admin/project">
            <li>
              <i className="fas fa-cogs"></i>Technologies
            </li>
          </Link>
        </ul>
        <button className="button button__uno" onClick={loggout}>
          Loggout
        </button>
      </aside>
      <main className="main__admin">{children}</main>
    </div>
  );
}
