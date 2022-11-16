import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loginAdmin } from "../actions/auth";
import { Context } from "../context/Context";
import { AdminRouter } from "./AdminRouter";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const { estado, dispatch } = useContext(Context);
  const { logged } = estado;
  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      dispatch(loginAdmin());
    } else {
      setIsLoggedIn(false);
    }
    setChecking(false);
  }, [dispatch, setIsLoggedIn, token]);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/comprobarToken`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token: localStorage.getItem("token") }),
  //     })
  //       .then((res) => res.json())
  //       .then((resp) => {
  //         console.log(resp);
  //         if (resp.expirado) {
  //           dispatch(logout());
  //           localStorage.clear();
  //         } else {
  //           localStorage.setItem(
  //             "user",
  //             JSON.stringify({
  //               id: resp[0].idUsuario,
  //               correo: resp[0].correo,
  //               nombre: resp[0].nombre,
  //               direccion: resp[0].direccion,
  //               rol: resp[0].rol,
  //               domicilio: null,
  //               avatar: resp[0].avatar,
  //             })
  //           );
  //           if (resp[0].rol === 1) {
  //             dispatch(
  //               logginAdmin({
  //                 id: resp[0].idUsuario,
  //                 correo: resp[0].correo,
  //                 nombre: resp[0].nombre,
  //                 direccion: resp[0].direccion,
  //                 rol: resp[0].rol,
  //                 domicilio: null,
  //                 avatar: resp[0].avatar,
  //               })
  //             );
  //             router.push("/admin");
  //           } else {
  //             dispatch(
  //               loggin({
  //                 id: resp[0].idUsuario,
  //                 correo: resp[0].correo,
  //                 nombre: resp[0].nombre,
  //                 direccion: resp[0].direccion,
  //                 rol: resp[0].rol,
  //                 domicilio: null,
  //                 avatar: resp[0].avatar,
  //               })
  //             );
  //           }
  //         }
  //       });
  //     // TODO MANTENER LA SESION DE EL ADMINISTRADOR
  //   }
  // }, [dispatch, router]);
  // console.log(isLoggedIn)
  if (checking) {
    return <h1>Mas....</h1>;
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <AdminRouter />
              </PrivateRouter>
            }
          />
          <Route
            path="/public/*"
            element={
              <PublicRouter>
                <DashboardRouter />
              </PublicRouter>
            }
          />

          {/* {
            isLoggedIn && <Route path="/admin"  component={AdminScreen}/>
          } */}

          {/* <Redirect to="/home" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
