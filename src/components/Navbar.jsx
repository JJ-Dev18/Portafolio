
import React from "react";
import {  Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = ({primer,segundo,tercero}) => {
  //  const { dispatch } = useContext(Context);
  //  const [openBar, setopenBar] = useState(false)
  // const handleProjects = () => {
  //      dispatch(openPortafolio())
  // }
  // const handleBar = () => {
  //   setopenBar(!openBar)
  // }
  return (
    <div className="content_nav">
      <Link  to={`../${primer}`}>
        <motion.button
          className="button button__uno"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 2 }}
        >
          {primer}
        </motion.button>
      </Link>
      <Link  to={`../${segundo}`}>
        <motion.button
          className="button button__dos"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 2.3 }}
        >
          {segundo}
        </motion.button>
      </Link>
      <a href="mailto:juanjomb1_vi@hotmai.com">
        <motion.button
          className="button button__tres"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 2.5 }}
        >
          Contact
        </motion.button>
      </a>
      {/* <NavLink exact to={`/${tercero}`}>
        <button className="button button__tres">{tercero}</button>
      </NavLink> */}
    </div>
  );
}
