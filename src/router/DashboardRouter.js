import React, {useContext,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { loginAdmin } from '../actions/auth';
import { About } from '../components/About';
import { AdminScreen, DashBoardAdmin, FormProjects } from '../components/AdminScreen';
import { Contact } from '../components/Contact';
import { Copy } from '../components/Copy';
import { Login } from '../components/Login';
import { ParticleBackground } from '../components/ParticleBackground';
import { Portada } from '../components/Portada';
import { ProjectsScreen } from '../components/ProjectsScreen';
import { Context } from '../context/Context';
import { AdminRouter } from './AdminRouter';

export const DashboardRouter = () => {
   const { estado, dispatch } = useContext(Context);
   const { logged } = estado;
    // useEffect(() => {
    //   let logged = localStorage.getItem("logged");
    //   if (logged) {
    //       dispatch(loginAdmin());  
    //   }
    // }, []);
  
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/public/home" component={Portada} />
          <Route exact path="/public/projects" component={ProjectsScreen} />
          <Route exact path="/public/about" component={About} />
          <Route exact path="/public/contact" component={Contact} />
          <Route exact path="/public/login" component={Login} />
          {/* {logged && <Route exact path="/admin" component={AdminRouter} />} */}

          <Redirect to="/public/home" />
        </Switch>
        <ParticleBackground />
        <Copy />
      </div>
    </Router>
  );
}
