import React from 'react'
import { Navbar } from './Navbar'
import Yo from '../images/yo.png'

export const About = () => {
  return (
    <div className="content_about">
      <h1 className="content_about_title">About me </h1>
      <div className="content_about_info">
        <div className="img_about">
          <img src={Yo} />
          <div className="redes_about">
            <a href="mailto:jj.murillo182020@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/JJ-Dev18" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-jos%C3%A9-murillo-5b4b201bb/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="info_about">
          <h1>
            Hello I'm <span>Juan José Murillo </span>
          </h1>

          <p>
            {" "}
            I consider myself a self-taught person with a "Never stop learning"
            philosophy. I'm passionate about learning everything, although at
            this moment I'm a front-developer, now I'm learning technologies
            about backend as Node, Php, and Java. Even I'm learning English at
            the same time, More about my studies in my{" "}
            <a
              href="https://drive.google.com/file/d/1Ib5Q1k9ZmbYnqDoEEGsnnCXGJZG_qs0o/view?usp=sharing"
              target="_blank"
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
          </p>
          <div className="content_skills">
            <h1>Skills</h1>
            <div className="content_img_skills">
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186499/Tecnologias%20Portafolio/732212-removebg-preview_sg3xfq.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267498/Tecnologias%20Portafolio/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20bdc01225.3371933415242446697867-removebg-preview_iuaieb.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186582/Tecnologias%20Portafolio/js_kgnsha.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627270910/Tecnologias%20Portafolio/reactjs-logo_yoadsg.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267556/Tecnologias%20Portafolio/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail-removebg-preview_jva8n2.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186755/Tecnologias%20Portafolio/bootstrap-logo-vector-download-removebg-preview_qbzp9b.png" />

              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271517/Tecnologias%20Portafolio/kisspng-github-repository-commit-version-control-github-5ab8bdf6f3ad65.7277177015220566949981-removebg-preview_zst92h.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271544/Tecnologias%20Portafolio/kisspng-github-continuous-integration-microsoft-azure-sour-innovation-research-lab-irl-5d0ee306c7f871.6978428915612567108191-removebg-preview_jmznii.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628187325/Tecnologias%20Portafolio/google-firebase-console_wt3v4x.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188119/Tecnologias%20Portafolio/nodejs_sz109v.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188296/Tecnologias%20Portafolio/MySQL.svg_agocgb.png" />
              <img src="https://res.cloudinary.com/dbi95d6gs/image/upload/v1628188394/Tecnologias%20Portafolio/mongodb-logo-clipart-1_s5qdih.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="Projects" tercero="Contact" />
      </div>
    </div>
  );
}
