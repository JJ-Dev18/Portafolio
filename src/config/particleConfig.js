

export  const configParticle = {
  background: {
   
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      // direction: MoveDirection.none,
      enable: true,
      outModes: {
        // default: OutMode.out,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: ["image","image2"],
      
      options : {
         fill : true,
         close : false ,
         image : [
          {
                //css
                src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267498/Tecnologias%20Portafolio/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20bdc01225.3371933415242446697867-removebg-preview_iuaieb.png",
                height: 100,
                width: 100,
              },
              {
                //firebase
                src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628187325/Tecnologias%20Portafolio/google-firebase-console_wt3v4x.png",
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
                src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186582/Tecnologias%20Portafolio/js_kgnsha.png",
                height: 100,
                width: 100,
              },
              {
                //html5
                src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186499/Tecnologias%20Portafolio/732212-removebg-preview_sg3xfq.png",
                height: 100,
                width: 100,
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
                src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186755/Tecnologias%20Portafolio/bootstrap-logo-vector-download-removebg-preview_qbzp9b.png",
                height: 100,
                width: 100,
              },
          
         ]
          
      
      }
    },
    size: {
      value: { min: 20, max: 35 },
    },
  },

  detectRetina: true,
}
// preload : [
            
//   {
//     //css
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267498/Tecnologias%20Portafolio/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20bdc01225.3371933415242446697867-removebg-preview_iuaieb.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //firebase
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628187325/Tecnologias%20Portafolio/google-firebase-console_wt3v4x.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //git
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627271517/Tecnologias%20Portafolio/kisspng-github-repository-commit-version-control-github-5ab8bdf6f3ad65.7277177015220566949981-removebg-preview_zst92h.png",
//     height: 100,
//     width: 100,
//   },

//   {
//     //sass
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627267556/Tecnologias%20Portafolio/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail-removebg-preview_jva8n2.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //javascript
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186582/Tecnologias%20Portafolio/js_kgnsha.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //html5
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186499/Tecnologias%20Portafolio/732212-removebg-preview_sg3xfq.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //react
//     src: " https://res.cloudinary.com/dbi95d6gs/image/upload/v1627270910/Tecnologias%20Portafolio/reactjs-logo_yoadsg.png",
//     height: 100,
//     width: 100,
//   },
//   {
//     //git hub
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1627272496/Tecnologias%20Portafolio/github_PNG40_rd5ezr.png",
//     height: 100,
//     width: 100,
//   },

//   {
//     //Bootstrap
//     src: "https://res.cloudinary.com/dbi95d6gs/image/upload/v1628186755/Tecnologias%20Portafolio/bootstrap-logo-vector-download-removebg-preview_qbzp9b.png",
//     height: 100,
//     width: 100,
//   },
// ],