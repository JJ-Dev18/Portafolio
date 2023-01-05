import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const FormTech = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const alert = useAlert();
  const initialForm = {
    nombre: state.nombre,
  };
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const [disabled, setdisabled] = useState(true);
  const [loadImage, setloadImage] = useState(true)
  const [file, setFile] = useState("");
  const [img, setimg] = useState(state.img)
  const token = localStorage.getItem("token");

  const { nombre } = formValues;
  console.log(file,"gile")
  const loadImg = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setloadImage(true)
    setimg(URL.createObjectURL(e.target.files[0]));
  };
   const atras = (e) => {
     e.preventDefault();
     navigate(-1);
   };
  const onUpdate = (e) => {
    e.preventDefault();
    setdisabled(!disabled);
    if(file != ""){
      setimg(state.img)
      setFile("")
    } else{
      setloadImage(!loadImage)
    }
  };
  const update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("img", file);
    formData.append("oldImg",state.img)
   

    fetch(`${process.env.REACT_APP_API_URL}/technologies/${state._id}`, {
      method: "PUT",
      headers: {
        "x-token": token,
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((res) => {
        setdisabled(true);
        alert.success(res.msg);
        reset();
        setFile("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <form className="form__project">
        <h1>Edit Tech</h1>
        {loadImage ? (
          <img src={img} alt="img technology" id="tech_img" />
        ) : (
          <input type="file" name="img" onChange={loadImg} />
        )}
        <input
          type="text"
          className="input__form"
          value={nombre}
          name="nombre"
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="nombre"
        />

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
