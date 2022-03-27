import React from "react";
import { Link } from "react-router-dom";


const Item =(props)=>{


const rutaCompleta=()=>{

  return '/productos/'+props.ruta;

}


return(
<>

<div className= "col-3">
    <div className="card" >
  <img src={props.logo} className="card-img-top" alt=""/>
  <div className="card-body">
  <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text">{props.parrafo}</p>
    <div className="row justify-content-center">
    <div className="col-5">
    <Link to={rutaCompleta()} className="btn btn-warning">Sabores</Link>
    </div>
    </div>
  </div>
</div>

</div>

</>
)

}
export default Item