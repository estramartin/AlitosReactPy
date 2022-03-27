import axios from "axios";
import React, {  useEffect, useState } from "react";
import MenuAdmin from "../MenuAdmin";
import BotonMenu from "../BotonMenu"
import { useHistory } from "react-router";

const VerProductos =()=>{


const history = useHistory();

const [productos, setProductos] =useState([]);


const obtenerProductos =()=>{

    axios.get(`http://127.0.0.1:8000/products/`).then((response)=>{

    setProductos(response.data);

    }).catch(()=>{

        alert('Error')
    })



}





const EliminarProducto =(codigo)=>{

    axios.delete(`http://127.0.0.1:8000/products/${codigo}`).then(()=>{

        alert('Producto eliminado')
        obtenerProductos()

    }).catch(()=>{


        alert('No se pudo eliminar')
    })
} 


useEffect(()=>{obtenerProductos()},[])




return(
    <>
 <div  className="row">
 
<div className="col-2 ">
<MenuAdmin/>
</div>
<div className="col-9 mt-5">
<BotonMenu nombre='Agregar Producto' ruta="agregar-producto" ></BotonMenu>
<table className="table table-dark table-striped">
    <thead>
        <tr>
        
          
            <th scope="col">Tipo</th>
            <th scope="col">Gusto</th>
            <th scope="col">Tamaño</th>
            <th scope="col">Precio</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
            

        </tr>
    </thead>
    <tbody>


        {productos.map((producto) => {
            return (
                <tr key={producto.Productos.codigo}>
                   
                    <td>{producto.TipoProductos.nombre}</td>
                    <td>{producto.Productos.gusto}</td>
                    <td>{producto.Productos.tamanio}</td>
                    <td>{producto.Productos.precio}</td>
                    <td><button className=" btn btn-warning" onClick={()=>{ history.push(`/administrador/agregar-producto/${producto.Productos.codigo}`)}}>EDITAR</button></td>
                    <td><button className=" btn btn-danger" onClick ={()=> EliminarProducto(producto.Productos.codigo)} >ELIMINAR</button></td>
                   
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
export default VerProductos