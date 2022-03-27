import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import imgLicores from '../../../../assets/Img/Licores.png';



const Licores =()=>
{

const[licores, setLicores] = useState([])


const TraerLicores=()=>{

axios.get('http://localhost:8000/products/').then((response)=>{

    setLicores(response.data)

}).catch(()=>{

    alert('Error')

})

}

useEffect(()=>{TraerLicores()},[])

const history = useHistory();

return(
      <div className="bg-dark">

            <div className="row bg-secondary justify-content-center">

                <div className="col-1">
                <h1>Licores</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-3">

                <img src={imgLicores} className="img-thumbnail" alt="..."/> 

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
                       
                       {licores.map(x=>{
                           if(x.TipoProductos.codigo===2){
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
                 <div className="col-1">       

                <button className="btn btn-warning m-1 w-100" onClick={() => history.push(`/productos`)}>Volver</button>
                </div>
                </div>
            </div>
        </div>
)


}
export default Licores