

export  const configParticle = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      // opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    // move: {
    //   speed: 1,
    //   out_mode: "out",
    // },
    shape: {
      type: ["image"],
      image: [
        {
          //css
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267498/Tecnologias%20Portafolio/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20bdc01225.3371933415242446697867-removebg-preview_iuaieb.png",
          height: 100,
          width: 100,
        },
        {
          //firebase
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271070/Tecnologias%20Portafolio/firebase_logo_rdhf6n.png",
          height: 100,
          width: 100,
        },
        {
          //git
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271517/Tecnologias%20Portafolio/kisspng-github-repository-commit-version-control-github-5ab8bdf6f3ad65.7277177015220566949981-removebg-preview_zst92h.png",
          height: 100,
          width: 100,
        },

        {
          //sass
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267556/Tecnologias%20Portafolio/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail-removebg-preview_jva8n2.png",
          height: 100,
          width: 100,
        },
        {
          //javascript
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271998/Tecnologias%20Portafolio/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225-removebg-preview_zqzqtp.png",
          height: 100,
          width: 150,
        },
        {
          //html5
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267650/Tecnologias%20Portafolio/png-clipart-orange-and-white-5-lgoo-w3c-html5-logo-icons-logos-emojis-tech-companies-removebg-preview_niwcmc.png",
          height: 100,
          width: 150,
        },
        {
          //react
          src: " https://res.cloudinary.com/dbi95d6gs/image/upload/v1627270910/Tecnologias%20Portafolio/reactjs-logo_yoadsg.png",
          height: 100,
          width: 100,
        },
        {
          //git hub
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627272496/Tecnologias%20Portafolio/github_PNG40_rd5ezr.png",
          height: 100,
          width: 100,
        },

        {
          //Bootstrap
          src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267152/Tecnologias%20Portafolio/Bootstrap__front-end_framework_-Logo.wine_hu2k2n.png",
          height: 100,
          width: 150,
        },
      ],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    color: {
      value: "#CCC",
    },
    size: {
      value: 30,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};