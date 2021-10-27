import React, {useContext} from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { Context } from '../context/Context';
import { AdminRouter } from './AdminRouter';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
export const AppRouter = () => {
  const {estado ,dispatch} = useContext(Context)
  const {logged :isLoggedIn } = estado;
  
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRouter
            isLoggedIn={isLoggedIn}
            path="/admin"
            component={AdminRouter}
          />
          <PublicRouter
            isLoggedIn={isLoggedIn}
            path="/"
            component={DashboardRouter}
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
