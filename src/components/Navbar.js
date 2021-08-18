
import React, { useContext ,useState} from "react";
import { openPortafolio } from "../actions/portfolio";
import { Context } from "../context/Context";
import {  NavLink } from "react-router-dom";

export const Navbar = ({primer,segundo,tercero}) => {
   const { dispatch } = useContext(Context);
   const [openBar, setopenBar] = useState(false)
  const handleProjects = () => {
       dispatch(openPortafolio())
  }
  const handleBar = () => {
    setopenBar(!openBar)
  }
  return (
    <div className="content_nav">
      <NavLink exact to={`/${primer}`}>
        <button className="button button__uno">{primer}</button>
      </NavLink>
      <NavLink exact to={`/${segundo}`}>
        <button className="button button__dos">{segundo}</button>
      </NavLink>
      {/* <NavLink exact to={`/${tercero}`}>
        <button className="button button__tres">{tercero}</button>
      </NavLink> */}
    </div>
  );
}
