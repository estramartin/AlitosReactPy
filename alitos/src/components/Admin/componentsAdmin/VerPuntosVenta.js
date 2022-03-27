import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import BotonMenu from "../BotonMenu";
import MenuAdmin from "../MenuAdmin";

const VerPuntosVenta=()=>{

const [PuntosVenta, setPuntosVenta] = useState([])

const history = useHistory()

const obtenerPuntosVenta=()=>{

axios.get(`http://127.0.0.1:8000/sellpoints`).then((response)=>{

setPuntosVenta(response.data)

}).catch(()=>{

    alert('Error')
})


}


const EliminarSellPoint=(id)=>{

axios.delete(`http://127.0.0.1:8000/sellpoints/${id}`).then(()=>{

alert("Punto de venta eliminado")
obtenerPuntosVenta()
})
}
useEffect(()=>{obtenerPuntosVenta()},[])


return(
    <>
<div  className="row">

<div className="col-2">
<MenuAdmin/>
</div>

<div className="col-10 mt-5">
<BotonMenu ruta='add-sellpoint' nombre='Agregar Punto de Venta'></BotonMenu>
<table className="table table-dark table-striped">
    <thead>
        <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Localidad</th>
            <th scope="col">Slogan</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>

        </tr>
    </thead>
    <tbody>


        {PuntosVenta.map((punto) => {
            return (
                <tr key={punto.codigo}>
                    
                    <td><strong> {punto.codigo} </strong></td>
                    <td>{punto.nombre}</td>
                    <td>{punto.direccion}</td>
                    <td>{punto.localidad}</td>
                    <td>{punto.slogan}</td>
                    <td><button className="btn btn-warning"onClick={()=>{history.push(`/administrador/add-sellpoint/${punto.codigo}`)}} >Editar</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{EliminarSellPoint(punto.codigo)}}>Eliminar</button></td>
                </tr>
            )
        })}


    </tbody>

</table>



</div>

</div>

    </>
)

}
export default VerPuntosVenta