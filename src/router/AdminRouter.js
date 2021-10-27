import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminScreen } from "../components/AdminScreen";

export const AdminRouter = () => {
  return (
    <div className="app">
    
        <Switch>
          <Route exact path="/admin/index" component={AdminScreen} />
         
          <Redirect to="/admin" />
        </Switch>
 
    </div>
  );
};
