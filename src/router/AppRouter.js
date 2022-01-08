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
