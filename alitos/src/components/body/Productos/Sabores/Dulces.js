import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import imgDulces from '../../../../assets/Img/Dulces.png';




const Dulces = () => {

    const history = useHistory();

    const [dulces,setDulces] = useState([])    

    const TraerDulces=()=>{

        axios.get('http://localhost:8000/products/').then((response)=>{
        setDulces(response.data)

        }).catch(()=>{alert('Error')})

    }

    useEffect(()=>{TraerDulces()},[])

    return (

        <div className="bg-dark">

            <div className="row bg-secondary justify-content-center">

                <div className="col-1">
                <h1>Dulces</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">

                <img src={imgDulces} className="img-thumbnail" alt="..."/> 

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
                                         
                       {dulces.map(x=>{ 
                           if(x.TipoProductos.codigo===3){
                           return  <tr key = {x.Productos.codigo}>
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
                 <div className="col-1">       

                <button className="btn btn-warning m-1 w-100" onClick={() => history.push(`/productos`)}>Volver</button>
                </div>
                </div>
            </div>
        </div>
    )


}
export default Dulces