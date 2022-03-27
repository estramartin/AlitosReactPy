import Carousel from "../Inicio/carousel";
import React from "react";
import '../Inicio/styles-inicio.css';


const Inicio =(props)=>{

    return(
        <>
        <div className="row inicio justify-content-center">
        <div className=" col-6 text-center p-5">
        <h1>Promos y productos</h1>

            <Carousel/>

        </div>      
        </div>
        </>
    )


}
export default Inicio