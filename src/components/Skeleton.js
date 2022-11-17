import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from 'prop-types'

/**
  Este componente sirve para crear el skeleton de cada card 
 */

 const SkeletonCard =( props) => {
  return (
    <ContentLoader
      width={356}
      height={250}
      viewBox="0 0 356 250"
      backgroundColor="#f0f0f0"
      foregroundColor="#e6e6e6"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="356" height="250" />
    </ContentLoader>
  );
}

export const SkeletonInfo = (props) => (
  
  <ContentLoader
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="350" height="500" />
  </ContentLoader>

);
/**
  Este componente sirve para crear el numero de skleleton segun el numero de pokemones 
 */
const Skeleton = ({numProyectos = 6})=>{
   
   const list = []

  for (let i = 0; i < numProyectos; i++) {
    list.push(<SkeletonCard key={i} />);
  }
  return(
   <>
    {list}
   </>
  )
}

export default Skeleton;

Skeleton.propTypes = {
 numProyectos : PropTypes.number.isRequired
};