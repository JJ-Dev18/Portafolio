import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
export const TechScreen = (props) => {
   const  navigate = useNavigate();
  const { loading, data } = useFetch(
    "https://apiportafoliojj.herokuapp.com/api/technologies?limite=12"
  );
  const alert = useAlert();
  const [showTech, setshowTech] = useState(false);
  const token = localStorage.getItem("token");
  const [techs, settechs] = useState([])
  console.log(navigate)
  const openTech = (tech) => {
    navigate(`/admin/tech/${tech._id}`, {state:tech});
   
  };
  console.log(data)
  useEffect(() => {
    if(!loading){
      settechs(data.techs)
    }
   
  }, [loading])

  const deleteP = (tech)=> {
    
    fetch(`https://apiportafoliojj.herokuapp.com/api/technologies/${tech._id}`, {
      method: "DELETE",
      headers: {
        "x-token": token,
      },
    
    })
      .then((resp) => resp.json())
      .then((res) => {
         alert.error(res.msg)
      }).catch(err=> console.log(err));
    
    settechs(techs.filter((technology) => technology._id !== tech._id)); 
      
  }
  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  
  return (
    <>
      <div className="content__admin__projects">
        {!loading &&
        (techs.length == 0) 
        ? <h1>There aren't Technologies</h1>
        :  techs.map((tech) => (
            <div className="content__card" key={tech._id}>
              <div className="project__card" onClick={() => openTech(tech)}>
                <h1>{tech.nombre}</h1>
                <p>{tech._id}</p>
                <img src={tech.img} alt="" width="50%" />
              </div>
              <button onClick={() => deleteP(tech)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
        ))
        
        }
       
      </div>
    </>
  );
};
