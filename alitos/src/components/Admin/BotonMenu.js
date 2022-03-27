import React from "react";
import {Link} from "react-router-dom";



const BotonMenu =(props)=>{

const ruta =()=>{

    return '/administrador/'+props.ruta;
}

return(
    <>

      <Link className="btn btn-warning w-25 boton-admin" to={ruta()}>{props.nombre}</Link>  
      


    </>
)

    
}
export default BotonMenu