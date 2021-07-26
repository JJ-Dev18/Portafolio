
import React, { useContext ,useState} from "react";
import { openPortafolio } from "../actions/portfolio";
import { Context } from "../context/Context";
import Bars from '../images/bars.png'

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
    <div className="content_navbar">
      <img src={Bars} onClick={handleBar}/>
      {
          (openBar) && <h1>Funciona </h1>
      }
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
