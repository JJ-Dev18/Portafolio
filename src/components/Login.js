import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { loginAdmin } from "../actions/auth";
export const Login = ({ history }) => {
  const [correo, setCorreo] = useState("");
  const [password, setpass] = useState("");
  const [error, seterror] = useState({
    there: false,
    errores: [],
    msg: "",
  });
  const { dispatch } = useContext(Context);
  // const { data, loading } = useFetch("process.env.REACT_APP_API_URL//auth/login");
  const handleInputCorreo = ({ target }) => {
    setCorreo(target.value);
  };
  const handleInputPass = ({ target }) => {
    setpass(target.value);
  };
  const submit = (e) => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          dispatch(loginAdmin());
        } else {
          data.errors
            ? seterror({
                there: true,
                errores: data.errors,
              })
            : seterror({
                there: false,
                msg: data.msg,
              });
        }
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };
  return (
    <div className="content_form">
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input
          type="text"
          id="correo"
          onChange={handleInputCorreo}
          value={correo}
          placeholder="correo"
        />
        <input
          type="password"
          id="password"
          onChange={handleInputPass}
          value={password}
          placeholder="password"
        />
        {error.there &&
          error.errores.map((err) => <h4 key={err.msg}>{err.msg}</h4>)}
        <h5>{error.msg}</h5>

        {/* {error.there && error.errores.map((error) => <h1>error.msg</h1>)} */}
        <button className="button button__uno" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
