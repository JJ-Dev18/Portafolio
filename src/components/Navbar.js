
import React, { useContext } from "react";
import { openPortafolio } from "../actions/portfolio";
import { Context } from "../context/Context";

export const Navbar = () => {
   const { dispatch } = useContext(Context);
  const handleProjects = () => {
       dispatch(openPortafolio())
  }
  return (
    <div className="content_navbar">
      <ul>
        <li >
           About
        </li>
        <li onClick={handleProjects}>
          Projects
        </li>
        <li>
          Contact
        </li>
      </ul>
    </div>
  )
}
