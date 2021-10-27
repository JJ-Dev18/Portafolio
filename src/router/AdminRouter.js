import React,{useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminScreen, DashBoardAdmin, FormProjects, ProjectAdmin, ProjectsScreen, Prueba } from "../components/AdminScreen";
import { ParticleBackground } from "../components/ParticleBackground";

export const AdminRouter = () => {
   const [showProject, setshowProject] = useState(true);
  return (
    <AdminScreen setshowProject={setshowProject} showProject={showProject}>
      <div>
        <Switch>
          <Route exact path="/admin" component={ProjectsScreen} />
          <Route exact path="/admin/project" component={Prueba} />
          <Redirect to="/admin" />
        </Switch>
      </div>
    
    </AdminScreen>
  );
};
