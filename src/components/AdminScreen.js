import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { loggoutAdmin } from '../actions/auth'
import { Context } from '../context/Context'
import { useFetch } from '../hooks/useFetch'
import { useAlert } from "react-alert";
import { useForm } from '../hooks/useForm'


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


export const FormCrearProject = () => {
   const tech = ['html','css','js']
    const [checkedState, setCheckedState] = useState(
      new Array(tech.length).fill(false)
    );
   const [disabled, setdisabled] = useState(false)
   const [technologies, settechnologies] = useState([])
   const token = localStorage.getItem("token");
  const initialForm = {
    nombre: '',
    website: '',
    codigo: '',
    descripcion: '',
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { nombre, website, codigo, descripcion } = formValues;
   const handleInputChecked = (position)=> {
     const updatedCheckedState = checkedState.map((item, index) =>
       index === position ? !item : item
     );
     
     let technologiesSelected= []
     setCheckedState(updatedCheckedState);
     updatedCheckedState.forEach((element,index) => {
         if(element){
           technologiesSelected.push(tech[index])
         }
     });
    settechnologies(technologiesSelected)
   }
   const onCreate = (e)=> {
     e.preventDefault()
   }
  return (
    <>
      <form className="form__project">
        <h1>Crear Proyecto</h1>
        <input
          type="text"
          className="input__form"
          value={nombre}
          name="nombre"
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="nombre"
        />
        <input
          type="text"
          className="input__form"
          value={website}
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="website"
          name="website"
        />
        <input
          type="text"
          className="input__form"
          value={codigo}
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="codigo"
          name="codigo"
        />
        <textarea
          cols="30"
          rows="10"
          name="descripcion"
          value={descripcion}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder="description"
        ></textarea>

        <ul className="toppings-list">
          {tech.map((tec, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={tec}
                      value={tec}
                      checked={checkedState[index]}
                      onChange={() => handleInputChecked(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{tec}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div style={{ display: "flex" }}>
          <button
            onClick={onCreate}
            className="button button__dos"
            disabled={disabled}
          >
            {" "}
            Crear{" "}
          </button>
        </div>
      </form>
    </>
  );
}


export const ProjectsScreen = ({history}) => {

  const { loading, data } = useFetch("https://apiportafoliojj.herokuapp.com/api/projects");
  const [showProject, setshowProject] = useState(false)
  const [infoProject, setinfoProject] = useState('')
  
  const openProject = (project) => {
      history.push({
        pathname: `/admin/project/${project._id}`,
        data: project, // your data array of objects
      });
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
        {/* {showProject && <i onClick={()=> setshowProject(false)} className="fas fa-hand-point-left cursor_pointer"></i>}
        {showProject && <FormProjects {...infoProject} />} */}
      </div>
    </>
  );
}


export const FormProjects = (props) => {
   const alert = useAlert();
  const [disabled, setdisabled] = useState(true)
  const { data } = props.location
  const initialForm = {
        nombre: data.nombre,
        website: data.website,
        codigo: data.codigo,
        descripcion : data.descripcion
      };

  const [formValues, handleInputChange, reset] = useForm(initialForm);
  
  const { nombre,website,codigo,descripcion} = formValues;
  const token = localStorage.getItem("token");

  const onUpdate = (e)=>{
    e.preventDefault()
    setdisabled(!disabled)
  }
  const atras= (e)=>{
    e.preventDefault()
    props.history.goBack()
  }
  const update =  (e)=>{
    e.preventDefault()
     fetch(`https://apiportafoliojj.herokuapp.com/api/projects/${data._id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         "x-token": token,
       },
       body: JSON.stringify(formValues),
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
          name="nombre"
          disabled={disabled}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input__form"
          value={website}
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="website"
          name="website"
        />
        <input
          type="text"
          className="input__form"
          value={codigo}
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="codigo"
          name="codigo"
        />
        <textarea
          cols="30"
          rows="10"
          name="descripcion"
          value={descripcion}
          onChange={handleInputChange}
          disabled={disabled}
        ></textarea>
        <div style={{ display: "flex" }}>
          <button
            onClick={onUpdate}
            className={`button ${disabled ? "button__uno" : "button__dos"}`}
          >
            {disabled ? "Editar" : "Cancelar"}
          </button>
            <button onClick={disabled ? atras : update} className="button button__tres">
              {disabled ? "Atras" : "Guardar"}
            </button>
          
        </div>
      </form>
    </>
  );
}



export const PaginaPortafolio = () => {
  return (
    <>
      <iframe width="100%" height="100%" src="https://jj-dev18.github.io/Portafolio/"></iframe>
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
          <Link to="/admin/projects">
            <li>
              <i className="fas fa-chalkboard"></i>
              Projects
            </li>
          </Link>
          <Link to="/admin/createproject">
            <li>
              <i className="fas fa-plus"></i>
              Create Project
            </li>
          </Link>
          <Link to="/admin/technologies">
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
