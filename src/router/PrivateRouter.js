import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouter = ({
  isLoggedIn,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/public" />
      }
    />
  );
};

PrivateRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
