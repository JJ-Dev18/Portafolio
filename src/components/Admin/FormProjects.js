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
  const token = localStorage.getItem("token");
  
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
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      loadingProjectTechnologies();
    }
  }, [loading]);

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
  const onUpdate = (e) => {
    e.preventDefault();
    setdisabled(!disabled);
  };
  const atras = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const update = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/projects/${state._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify({...formValues,tecnologias : technologiesSelected}),
    })
      .then((resp) => resp.json())
      .then((respon) => {
        setdisabled(true);
        alert.success(respon.msg);
      })
      .catch((err) => alert.error(err));
  };
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
        <ul className="toppings-list">
          {loading ? <h4>Loading Technologies ....</h4>
            :  projectTecnologies.map((tec) => (
              <li key={tec._id}>
                <div className="toppings-list-item">
                  <div className="left-section">
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
                    <img
                      id="tech_used"
                      src={tec.img}
                      alt="tecnologias usadas"
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
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
