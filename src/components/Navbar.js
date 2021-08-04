
import React, { useContext ,useState} from "react";
import { openPortafolio } from "../actions/portfolio";
import { Context } from "../context/Context";
import Bars from '../images/bars.png'
import logo from '../images/logo.png'

export const Navbar = () => {
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
      <button className="button button__about">About me</button>
      <button className="button button__contact">Contact</button>
      <button className="button button__projects" onClick={handleProjects}>Projects</button>
    </div>
  );
}
