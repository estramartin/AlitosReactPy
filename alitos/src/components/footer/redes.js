import React from "react";




const Redes =(props)=>{

    
    return(
        <>
    
        <div className="d-block">
            <a href={props.linka }  target="_blank" rel="noreferrer"> 
            <h6 className="icono-redes float-start ms-4">{props.icono}</h6>
            <h6 className="texto-redes float-start">{props.red}</h6>
            
            </a>
            
        
        </div>
        

        </>
    )


}
export default Redes