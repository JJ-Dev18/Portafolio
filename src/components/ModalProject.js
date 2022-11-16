import { motion , AnimatePresence } from 'framer-motion'
import React  from 'react'

const backdrop = {
  visible : { opacity : 1 },
  hidden : { opacity : 0 }
}
const modal = {
  hidden : {
    y : '-100vh',
    opacity : 0 
  },
  visible : {
    y: "200px",
    opacity : 1 ,
    transition : { delay : 0.5 }
  }
}
const ModalProject = ({
  showModal,
  setShowModal,
  projectName,
  gif,
  descripcion,
  website,
  codigo,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          onClick={(e) => setShowModal(false)}
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h2>{projectName}</h2>
            <div className="contentModal">
              <img src={gif} alt="gif project"/>
              {descripcion && <p> {descripcion}</p>}
            </div>
            <motion.vid className="info_project_enlaces">
              <div className="info_project_enlaces">
                <a
                  className="button button__website"
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-globe"></i>
                  Website
                </a>
                <a
                  className="button button__codigo"
                  href={codigo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                  Code
                </a>
              </div>
            </motion.vid>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProject;
