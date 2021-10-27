import React, {useContext,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { loginAdmin } from '../actions/auth';
import { About } from '../components/About';
import { AdminScreen, DashBoardAdmin } from '../components/AdminScreen';
import { Contact } from '../components/Contact';
import { Copy } from '../components/Copy';
import { Login } from '../components/Login';
import { ParticleBackground } from '../components/ParticleBackground';
import { Portada } from '../components/Portada';
import { ProjectsScreen } from '../components/ProjectsScreen';
import { Context } from '../context/Context';

export const DashboardRouter = () => {
   const { estado, dispatch } = useContext(Context);
   const { logged } = estado;
    // useEffect(() => {
    //   let logged = localStorage.getItem("logged");
    //   if (logged) {
    //       dispatch(loginAdmin());  
    //   }
    // }, []);
  console.log(logged)
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/home" component={Portada} />
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          {
            logged && <Route exact path="/admin" component={DashBoardAdmin} />
          }

          <Redirect to="/home" />
        </Switch>
        <ParticleBackground />
        <Copy />
      </div>
    </Router>
  );
}
