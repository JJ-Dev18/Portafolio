import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from '../../hooks/useForm';


export const FormProjects = (props) => {
  const alert = useAlert();
  const [disabled, setdisabled] = useState(true);
  const { data } = props.location;
  const initialForm = {
    nombre: data.nombre,
    website: data.website,
    codigo: data.codigo,
    descripcion: data.descripcion,
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { nombre, website, codigo, descripcion } = formValues;
  const token = localStorage.getItem("token");

  const onUpdate = (e) => {
    e.preventDefault();
    setdisabled(!disabled);
  };
  const atras = (e) => {
    e.preventDefault();
    props.history.goBack();
  };
  const update = (e) => {
    e.preventDefault();
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

