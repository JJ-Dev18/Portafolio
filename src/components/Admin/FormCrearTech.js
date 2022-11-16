import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "../../hooks/useForm";

export const FormCrearTech = () => {
  const [disabled, setdisabled] = useState(false);
  const alert = useAlert();

  const token = localStorage.getItem("token");
  const initialForm = {
    nombre: "",
  };
  const [file, setFile] = useState("");
  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { nombre } = formValues;
  const loadImg = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const onCreate = (e) => {
    e.preventDefault();
    setdisabled(true)
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("img", file);

    fetch("https://apiportafoliojj.herokuapp.com/api/technologies", {
      method: "POST",
      headers: {
        "x-token": token,
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((res) => {
       (res.tech) ?  alert.success("Create success") : alert.error("img or name null")
        reset();
        setdisabled(false)
        setFile(null);
      });
  };

  return (
    <>
      <form className="form__project">
        <h1>Create Tech</h1>
        <input
          type="text"
          className="input__form"
          value={nombre}
          name="nombre"
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="nombre"
        />
        <input type="file" name="img" onChange={loadImg} />

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
