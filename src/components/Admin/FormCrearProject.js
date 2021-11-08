import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';

export const FormCrearProject = () => {
  const alert = useAlert();
  const tech = ["html", "css", "js"];
  const [checkedState, setCheckedState] = useState(
    new Array(tech.length).fill(false)
  );
  const [disabled, setdisabled] = useState(false);
  const { data, loading } = useFetch(
    "https://apiportafoliojj.herokuapp.com/api/technologies"
  );
  const [file, setfile] = useState(null)
  const [technologies, settechnologies] = useState([]);
  const token = localStorage.getItem("token");
  const initialForm = {
    nombre: "",
    website: "",
    codigo: "",
    descripcion: "",
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { nombre, website, codigo, descripcion } = formValues;
  const handleInputChecked = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    let technologiesSelected = [];
    setCheckedState(updatedCheckedState);
    updatedCheckedState.forEach((element, index) => {
      if (element) {
        technologiesSelected.push(tech[index]);
      }
    });
    settechnologies(technologiesSelected);
  };
  const loadFile = ({target}) => {
   setfile(target.files[0])
  }
  console.log(data)
  const onCreate = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("nombre",nombre)
    formData.append("website", website);
    formData.append("descripcion", descripcion);
    formData.append("codigo", codigo);
    formData.append("techonologies",technologies)
    formData.append("img", file)
     fetch("https://apiportafoliojj.herokuapp.com/api/projects", {
       method: "POST",
       headers: {
         "x-token": token,
       },
       body: formData,
     })
       .then((resp) => resp.json())
       .then((res) => {
         res.project
           ? alert.success("Create success")
           : alert.error("img or name null");
         console.log(res)
         reset()
         setfile(null)
        });

  };
  return (
    <>
      <form className="form__project">
        <h1>Create Project</h1>
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
          rows="5"
          name="descripcion"
          value={descripcion}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder="description"
        ></textarea>
        <input type="file" onChange={loadFile} name="img" style={{marginTop:'10px'}}/>
        <ul className="toppings-list">
          {!loading && 
          data.techs.map((tec, index) => {
            return (
              <li key={tec._id}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={tec.nombre}
                      value={tec.nombre}
                      checked={checkedState[index]}
                      onChange={() => handleInputChecked(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{tec.nombre}</label>
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
};
