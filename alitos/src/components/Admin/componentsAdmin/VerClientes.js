import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import BotonMenu from "../BotonMenu";
import MenuAdmin from "../MenuAdmin";


const VerClientes = () => {

    const [clientes, setClientes] = useState([]);
    const history = useHistory();
    const ObtenerClientes = async () => {

        axios.get(`http://127.0.0.1:8000/clients`).then((response) => {

            setClientes(response.data)
            console.log(response.data)

        }).catch(() => {

            alert("Error")
        })


    }

    const EliminarCliente=(id)=>{

        axios.delete(`http://127.0.0.1:8000/clients/${id}`).then(()=>{

        alert('Cliente Eliminado Correctamente')
        ObtenerClientes();

        }).catch(()=>{

        alert('No se pudo eliminar el cliente')    

        })


    }

    useEffect(() => { ObtenerClientes() }, [])


    return (
        <div  className="row">

            <div className="col-2">
            <MenuAdmin/>
            </div>

           
            <div className="col-10 mt-5">
            <BotonMenu ruta='agregar-cliente' nombre='Agregar Cliente'/>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Cuil</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>


                    {clientes.map((cliente) => {
                        return (
                            <tr key={cliente.codigo}>
                                
                                <td><strong> {cliente.codigo} </strong></td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.cuil}</td>
                                <td><button className="btn btn-warning" onClick={()=>{history.push(`agregar-cliente/${cliente.codigo}`)}}>Editar</button></td>
                                <td><button className="btn btn-danger" onClick={()=>{EliminarCliente(cliente.codigo)}}>Eliminar</button></td>
                            </tr>
                        )
                    })}


                </tbody>

            </table>



            </div>

        </div>
    )


}
export default VerClientes