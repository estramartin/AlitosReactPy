import React from "react";
import '../Nosotros/styles-nosotros.css'
import nosotros from '../../../assets/Img/nosotros.png'

const Nosotros =()=>{

    return(
        <>
            <div className="nosotros row justify-content-center pt-5">
                <div className="col-6">
                <img src={nosotros} class="img-fluid" alt="..."/>
                <h1>Nosotros</h1>
                <p>Nuestra empresa nace en el año 2017, fundada por el Lic. en control de alimentos, Alejandro Amuchasteguy</p>
                </div>
            </div>

        
       
        
        </>
    )

}
export default Nosotros