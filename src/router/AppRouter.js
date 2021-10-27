import React, {useContext,useEffect,useState} from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { loginAdmin } from '../actions/auth';
import { Context } from '../context/Context';
import { AdminRouter } from './AdminRouter';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
export const AppRouter = () => {
  const {estado ,dispatch} = useContext(Context)
  const {logged} = estado;
  const [checking, setChecking] = useState(true);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 let log = localStorage.getItem("logged");
  useEffect(() => {
   
    if(log){
      setIsLoggedIn(true)
      dispatch(loginAdmin())
    }
    else{
      setIsLoggedIn(false)
    }
     setChecking(false); 
  }, [dispatch, setIsLoggedIn,log]);
  // console.log(isLoggedIn)
      if (checking) {
        return <h1>Mas....</h1>;
      }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            isLoggedIn={isLoggedIn}
            path="/public"
            component={DashboardRouter}
          />
          <PrivateRouter
            isLoggedIn={isLoggedIn}
            path="/"
            component={AdminRouter}
          />
          {/* {
            isLoggedIn && <Route path="/admin"  component={AdminScreen}/>
          } */}

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}
