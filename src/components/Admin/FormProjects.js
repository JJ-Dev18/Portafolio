import React, { useState, useEffect, useCallback } from "react";
import { useAlert } from "react-alert";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";

export const FormProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const initialForm = {
    nombre: state.nombre,
    website: state.website,
    codigo: state.codigo,
    descripcion: state.descripcion,
  };
  const alert = useAlert();
  const [disabled, setdisabled] = useState(true);
  const [projectTecnologies, setProjectTecnologies] = useState([]);
  const [technologiesSelected, setTechnologiesSelected] = useState([]);
  const [formValues, handleInputChange] = useForm(initialForm);
  const { nombre, website, codigo, descripcion } = formValues;
  const [img, setimg] = useState(state.img)
  const [gif, setGif] = useState(state.gif)
  const [file, setfile] = useState({oldImg : state.img, oldGif: state.gif})

  const token = localStorage.getItem("token");
  console.log(file)
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/technologies`
  );

  const loadingProjectTechnologies = useCallback(() => {
    let projectTecnologies = [];
    let encontrado = false;
    for (let index = 0; index < data?.techs.length; index++) {
      for (let j = 0; j < state.tecnologias.length; j++) {
        if (data.techs[index]._id === state.tecnologias[j]._id) {
          projectTecnologies.push({ ...data.techs[index], checked: true });
          encontrado = true;
          break;
        }
      }
      if (!encontrado) {
        projectTecnologies.push({ ...data.techs[index], checked: false });
      } else encontrado = false;
    }
    setProjectTecnologies(projectTecnologies);
  }, [loading,data.techs,state.tecnologias]);

  useEffect(() => {
    if (!loading) {
      loadingProjectTechnologies();
    }
  }, [loading,loadingProjectTechnologies]);

  const handleInputChecked = (position) => {
    const updatedTechnologies = projectTecnologies.map((item, index) =>
      item._id === position ? { ...item, checked: !item.checked } : item
    );

    const technologiesSelected = updatedTechnologies.filter(
      (tech) => tech.checked === true
    );
    setProjectTecnologies(updatedTechnologies);
    setTechnologiesSelected(technologiesSelected);
  };

  const loadImg = (e) => {
    e.preventDefault();
    setfile({...file, img : e.target.files[0]});
    setimg(URL.createObjectURL(e.target.files[0]));
  };
  const loadGif = (e) => {
    e.preventDefault();
    setfile({...file,gif : e.target.files[0]});
    setGif(URL.createObjectURL(e.target.files[0]));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    setdisabled(!disabled);
    
  };

  const atras = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const update = (e) => {
    setdisabled(true)
    e.preventDefault();
     const formData = new FormData();
     formData.append("nombre", nombre);
     formData.append("website", website);
     formData.append("descripcion", descripcion);
     formData.append("codigo", codigo);
     formData.append("oldImg", file.oldImg);
     formData.append("oldGif", file.oldGif);
     if(file.img){
       formData.append("img", file.img); 
     }
     if(file.gif){
       formData.append("gif", file.gif);
     }

     technologiesSelected.map((technology, index) => {
       formData.append(`tecnologias`, technology._id);
     });

    fetch(`${process.env.REACT_APP_API_URL}/projects/${state._id}`, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((respon) => {
        alert.success(respon.msg);
        console.log(respon)
        setfile({oldImg : respon.project.img , oldGif : respon.project.gif})
      })
      .catch((err) => alert.error(err));
  };
  return (
    <>
      <form className="form__project">
        <h1>Edit Project</h1>
        <img src={img} alt="img project" id="project_img" />
        {!disabled &&
          <input type="file" name="img" onChange={loadImg} />
        }
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

        <ul className="toppings-list">
          {loading ? (
            <h4>Loading Technologies ....</h4>
          ) : (
            projectTecnologies.map((tec) => (
              <li key={tec._id}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <img
                      id="tech_used"
                      src={tec.img}
                      alt="tecnologias usadas"
                    />
                    <input
                      disabled={disabled}
                      type="checkbox"
                      id={`custom-checkbox-${tec._id}`}
                      name={tec.nombre}
                      value={tec.nombre}
                      checked={tec.checked}
                      onChange={() => handleInputChecked(tec._id)}
                    />
                    <label htmlFor={`custom-checkbox-${tec._id}`}>
                      {tec.nombre}
                    </label>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        <img src={gif} alt="gif project" id="project_img" />
        {!disabled &&
          <input type="file" name="gif" onChange={loadGif} />
        }
        <div style={{ display: "flex" }}>
          <button
            onClick={onUpdate}
            className={`button ${disabled ? "button__uno" : "button__dos"}`}
          >
            {disabled ? "Editar" : "Cancelar"}
          </button>
          <button
            onClick={disabled ? atras : update}
            className="button button__tres"
          >
            {disabled ? "Atras" : "Guardar"}
          </button>
        </div>
      </form>
    </>
  );
};
