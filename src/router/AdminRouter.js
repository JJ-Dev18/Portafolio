import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route  path="/admin" element={<PaginaPortafolio/>} />
          <Route  path="/admin/projects" element={<ProjectsScreen/>} />
          <Route
           
            path="/admin/createproject"
            element={<FormCrearProject/>}
          />
          <Route
            
            path="/admin/project/:projectId"
            element={<FormProjects/>}
          />
          <Route  path="/admin/createtech" element={<FormCrearTech/>} />
          <Route  path="/admin/technologies" element={<TechScreen/>} />
          {/* <Redirect to="/admin" /> */}
        </Routes>
      </div>
    </AdminScreen>
  );
};
