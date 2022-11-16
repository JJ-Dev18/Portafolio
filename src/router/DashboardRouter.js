import React, {useContext} from 'react'
import {  Routes, Route } from "react-router-dom";
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Copy } from '../components/Copy';
import { Login } from '../components/Login';
import { ParticleBackground } from '../components/ParticleBackground';
import { Portada } from '../components/Portada';
import { ProjectsScreen } from '../components/ProjectsScreen';
import { Context } from '../context/Context';


export const DashboardRouter = () => {
   const { estado } = useContext(Context);
   const { logged } = estado;
    // useEffect(() => {
    //   let logged = localStorage.getItem("logged");
    //   if (logged) {
    //       dispatch(loginAdmin());  
    //   }
    // }, []);
  
  return (
    <>
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/home" element={<Portada />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* {logged && <Route exact path="/admin" component={AdminRouter} />} */}
          <Route path="/" element={<Portada />} />
          {/* <Redirect to="/public/home" /> */}
        </Routes>
        <ParticleBackground />
        <Copy />
      </div>
    </>
  );
}
