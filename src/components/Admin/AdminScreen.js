import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { loggoutAdmin } from '../../actions/auth';
import { Context } from '../../context/Context';


export const AdminScreen = ({
  children,
  setshowProject,
  showProject,
  ...props
}) => {
  const {  dispatch } = useContext(Context);

  const loggout = () => {
    dispatch(loggoutAdmin());
    localStorage.removeItem("token");
    console.log('loggour')
  };
  return (
    <div style={{ display: "flex" }}>
      <aside className="drawer">
        <h1>Admin JJ</h1>
        <ul>
          <Link to="/admin/projects">
            <li>
              <i className="fas fa-chalkboard"></i>
              Projects
            </li>
          </Link>
          <Link to="/admin/createproject">
            <li>
              <i className="fas fa-plus"></i>
              Create Project
            </li>
          </Link>
          <Link to="/admin/technologies">
            <li>
              <i className="fas fa-cogs"></i>Technologies
            </li>
          </Link>
          <Link to="/admin/createtech">
            <li>
              <i className="fas fa-plus"></i>Create Tech
            </li>
          </Link>
        </ul>
        <button className="button button__uno" onClick={loggout}>
          Loggout
        </button>
      </aside>
      <main className="main__admin">{children}</main>
    </div>
  );
};
