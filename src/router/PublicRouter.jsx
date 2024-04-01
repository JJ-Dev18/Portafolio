import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

export const PublicRouter = ({ children }) => {
  const { estado } = useContext(Context);

  return estado.logged ? <Navigate to="/admin" /> : children;
};
