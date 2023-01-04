import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";

export const FormProjects = () => {
  const alert = useAlert();
  const [disabled, setdisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/technologies`
  );
  const { state } = location;
  const initialForm = {
    nombre: state.nombre,
    website: state.website,
    codigo: state.codigo,
    descripcion: state.descripcion,
  };
  const [checkedState, setCheckedState] = useState(new Array(15).fill(false));

  const [technologies, settechnologies] = useState([]);
  const [formValues, handleInputChange] = useForm(initialForm);
  const { nombre, website, codigo, descripcion } = formValues;
  const token = localStorage.getItem("token");
  
  const handleInputChecked = (position) => {
    console.log(position,"position")
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    let technologiesSelected = [];
    setCheckedState(updatedCheckedState);
    updatedCheckedState.forEach((element, index) => {
      if (element) {
        technologiesSelected.push(state.tecnologias[index]);
      }
    });
    settechnologies(technologiesSelected);
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
      body: JSON.stringify(formValues),
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
          {state.tecnologias.map((tec) => (
            <li key={tec._id}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${tec._id}`}
                    name={tec.nombre}
                    value={tec.nombre}
                    checked={checkedState[tec._id]}
                    onChange={() => handleInputChecked(tec._id)}
                  />
                  <label htmlFor={`custom-checkbox-${tec._id}`}>
                    {tec.nombre}
                  </label>
                  <img id="tech_used" src={tec.img} alt="tecnologias usadas" />
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
