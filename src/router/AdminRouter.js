import React,{useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminScreen, DashBoardAdmin, FormCrearProject, FormProjects, PaginaPortafolio, ProjectAdmin, ProjectsScreen, Prueba } from "../components/AdminScreen";
import { ParticleBackground } from "../components/ParticleBackground";

export const AdminRouter = () => {
   const [showProject, setshowProject] = useState(true);
  return (
    <AdminScreen setshowProject={setshowProject} showProject={showProject}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Switch>
          <Route exact path="/admin" component={PaginaPortafolio} />
          <Route exact path="/admin/projects" component={ProjectsScreen} />
          <Route
            exact
            path="/admin/createproject"
            component={FormCrearProject}
          />
          <Route
            exact
            path="/admin/project/:projectId"
            component={FormProjects}
          />
          <Redirect to="/admin" />
        </Switch>
      </div>
    </AdminScreen>
  );
};
