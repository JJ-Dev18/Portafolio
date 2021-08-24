import React from 'react'
import { Navbar } from './Navbar'
import Yo from '../images/yo.png'
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="content_about">
      <motion.h1
        className="content_about_title"
        initial={{ y: "-100", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        About me{" "}
      </motion.h1>
      <div className="content_about_info">
        <div className="img_about">
          <motion.img
            src={Yo}
            alt="Mi foto de perfil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 3, delay: 1.5 }}
          />
          <div className="redes_about">
            <motion.a
              href="mailto:jj.murillo182020@gmail.com"
              target="_blank"
              rel="noreferrer"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 1.6 }}
            >
              <i className="fas fa-envelope"></i>
              E-mail
            </motion.a>
            <motion.a
              href="https://github.com/JJ-Dev18"
              target="_blank"
              rel="noreferrer"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 1.7 }}
            >
              <i className="fab fa-github" alt="Github"></i>
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juan-jos%C3%A9-murillo-5b4b201bb/"
              target="_blank"
              rel="noreferrer"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3, delay: 1.8 }}
            >
              <i className="fab fa-linkedin"></i>
              Linkedin
            </motion.a>
          </div>
        </div>
        <div className="info_about">
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 3, delay: 1 }}
          >
            Hello I'm <span>Juan José Murillo </span>
          </motion.h1>

          <motion.p
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 3, delay: 1.3 }}
          >
            {" "}
            I consider myself a self-taught person with a "Never stop learning"
            philosophy. I'm passionate about learning everything, although
            currently I'm a front-developer, I'm learning technologies about
            backend such as Node, Php, and Java. Even I'm learning English at the
            same time, More about my studies in my{" "}
            <a
              href="https://drive.google.com/file/d/1Ib5Q1k9ZmbYnqDoEEGsnnCXGJZG_qs0o/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV .
            </a>
            <br />
            {/* <a
              href="https://drive.google.com/file/d/1Ib5Q1k9ZmbYnqDoEEGsnnCXGJZG_qs0o/view?usp=sharing"
              className="button button_cv"
              target="_blank"
            >
              CV
            </a> */}
          </motion.p>
          <div className="content_skills">
            <motion.h1
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4, delay: 1.5 }}
            >
              Skills
            </motion.h1>
            <motion.div
              className="content_img_skills"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 4, delay: 1.8 }}
            >
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186499/Tecnologias%20Portafolio/732212-removebg-preview_sg3xfq.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267498/Tecnologias%20Portafolio/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20bdc01225.3371933415242446697867-removebg-preview_iuaieb.png"
                alt="Tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186582/Tecnologias%20Portafolio/js_kgnsha.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627270910/Tecnologias%20Portafolio/reactjs-logo_yoadsg.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267556/Tecnologias%20Portafolio/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail-removebg-preview_jva8n2.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186755/Tecnologias%20Portafolio/bootstrap-logo-vector-download-removebg-preview_qbzp9b.png"
                alt="tecnologia"
              />

              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271517/Tecnologias%20Portafolio/kisspng-github-repository-commit-version-control-github-5ab8bdf6f3ad65.7277177015220566949981-removebg-preview_zst92h.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271544/Tecnologias%20Portafolio/kisspng-github-continuous-integration-microsoft-azure-sour-innovation-research-lab-irl-5d0ee306c7f871.6978428915612567108191-removebg-preview_jmznii.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628187325/Tecnologias%20Portafolio/google-firebase-console_wt3v4x.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188119/Tecnologias%20Portafolio/nodejs_sz109v.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188296/Tecnologias%20Portafolio/MySQL.svg_agocgb.png"
                alt="tecnologia"
              />
              <img
                src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188394/Tecnologias%20Portafolio/mongodb-logo-clipart-1_s5qdih.png"
                alt="tecnologia"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="Projects" />
      </div>
    </div>
  );
}
