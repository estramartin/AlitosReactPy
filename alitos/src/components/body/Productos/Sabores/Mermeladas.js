import axios from "axios";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import imgMermeladas from '../../../../assets/Img/Mermeladas2.png';

const Mermeladas =()=>
{
const [mermelada, setMerme] = useState([])

const history = useHistory();




const TraerMermeladas=()=>{
axios.get('http://localhost:8000/products/').then((response)=>{

setMerme(response.data)

})

}

useEffect(()=>{TraerMermeladas()},[])


return(
    <>
    <div className="bg-dark">

<div className="row bg-secondary justify-content-center">

    <div className="col-1">
    <h1>Mermeladas</h1>
    </div>
</div>
<div className="row">
    <div className="col-3">

    <img src={imgMermeladas} className="img-thumbnail" alt="..."/> 

</div>

<div className="col-9">
    <table className="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">Sabor</th>
                <th scope="col">Tamaño</th>
                <th scope="col">Precio</th>
               
            </tr>
        </thead>
        <tbody>
           
           {mermelada.map(x=>{
               if(x.TipoProductos.codigo ===1){
               return <tr key ={x.Productos.codigo}>
               <th scope="row">{x.Productos.gusto}</th>
               <td>{x.Productos.tamanio}</td>
               <td>${x.Productos.precio}-</td>                    
                  
           </tr>
               }
            })}
           
        </tbody>
    </table>


    </div>

    <div className="row justify-content-center">
     <div className=" col-1">       

    <button className="btn btn-warning m-1 w-100" onClick={() => history.push(`/productos`)}>Volver</button>
    </div>
    </div>
</div>
</div>
    </>
)


}
export default Mermeladas