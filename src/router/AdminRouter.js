import React,{useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminScreen } from "../components/Admin/AdminScreen";
import { FormCrearProject } from "../components/Admin/FormCrearProject";
import { FormCrearTech } from "../components/Admin/FormCrearTech";
import { FormProjects } from "../components/Admin/FormProjects";
import { ProjectsScreen } from "../components/Admin/ProjectsScreen";
import { TechScreen } from "../components/Admin/TechScreen";
import { PaginaPortafolio } from "../components/PaginaPortafolio";

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
          <Route exact path="/admin/createtech" component={FormCrearTech} />
          <Route exact path="/admin/technologies" component={TechScreen} />
          <Redirect to="/admin" />
        </Switch>
      </div>
    </AdminScreen>
  );
};
