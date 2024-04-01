import { useContext } from "react";
import React from 'react'
import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

export const PrivateRouter = ({ children }) => {
  const { estado } = useContext(Context);

  return estado.logged ? children : <Navigate to="/public/" />;
};
