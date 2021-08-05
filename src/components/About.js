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
            <a href="https://github.com/JJ-Dev18" target="_blank">
              <i className="fas fa-envelope-open-text"></i>
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
            the same time, More about my studies in my CV.
          </p>
          <div className="content_button_cv">
            <a
              href="https://drive.google.com/file/d/1Ib5Q1k9ZmbYnqDoEEGsnnCXGJZG_qs0o/view?usp=sharing"
              className="button button_cv"
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>
      </div>
      <div className="content_projects_nav">
        <Navbar primer="Home" segundo="Projects" tercero="Contact" />
      </div>
    </div>
  );
}
