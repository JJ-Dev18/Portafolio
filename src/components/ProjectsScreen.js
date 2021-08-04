import React,{useContext} from 'react'
import { Context } from "../context/Context";
import Logo from '../images/logo.png'
import Gift from '../images/gifs/Gift.gif'
import Heroes from '../images/gifs/Heroes.gif'
import Journal from "../images/gifs/Journal.gif";
import SweetShop from "../images/gifs/SweetShop.gif";
import Matrix from "../images/gifs/Matrix.gif";
import Social from "../images/gifs/Social.gif";
import { openPortafolio } from '../actions/portfolio';

export const ProjectsScreen = () => {

    const { dispatch } = useContext(Context);

    const handleCerrarPort = () => {
      dispatch(openPortafolio())
    }
  return (
    <div className="content_projects">
      <div className="content_projects-title">
        <img src={Logo} onClick={handleCerrarPort} alt="logo" />
        <h1>Projects</h1>
      </div>

      <div className="grid_projects">
        <div className="content_project">
          <img src={Gift} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>React Gift Expert</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/React-gif-expert/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/React-gif-expert"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="content_project">
          <img src={Heroes} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>Heroes App</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/ReactHeroes/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/ReactHeroes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="content_project">
          <img src={Journal} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>Journal Entries</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/JournalEntries/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/JournalEntries"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="content_project">
          <img src={SweetShop} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>SweetShop</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/SweetShop/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/SweetShop"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="content_project" id="matrix">
          <img src={Matrix} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>Netflix Mobile</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/Netflix-front/."
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/Netflix-front"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="content_project">
          <img src={Social} alt="gif aplicacion de gifs" />
          <div className="info_project">
            <h1>Social Media dashboard</h1>
            <div className="info_project_enlaces">
              <a
                href="https://jj-dev18.github.io/Social-media/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                WEBSITE
              </a>
              <a
                href="https://github.com/JJ-Dev18/Social-media"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-globe"></i>
                Codigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
