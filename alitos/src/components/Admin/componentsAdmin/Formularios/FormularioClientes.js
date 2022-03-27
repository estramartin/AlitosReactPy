import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FormularioClientes =()=>{

const history = useHistory();
const {idcliente} = useParams();
const [cliente, setClinete] = useState({
codigo:0,
nombre: "",
password:"",
email :"",
telefono: "",
cuil:"",
dni:0
});

const {codigo, nombre, password, email, telefono, cuil, dni}=cliente; 

const nuevoCliete=()=>{
    return{
    codigo:0,
    nombre: cliente.nombre,
    password:cliente.password,
    email : cliente.email,
    telefono: cliente.telefono,
    cuil:cliente.cuil,
    dni: cliente.dni
    }
} 

           

const CambioEnFormulario=(targetEvent)=>{

setClinete({...cliente,[targetEvent.name]: targetEvent.value})

}

const AgregarCliente=()=>{

const nuevocli = nuevoCliete();

axios.post(`http://127.0.0.1:8000/clients`, nuevocli).then(()=>{

alert("Cliente Agregado")
history.push('/administrador/clientes');
}).catch(()=>{

alert('No se pudo agregar el cliente');

})
    
}

const EditarCliente=()=>{

const nuevoCli = nuevoCliete();

axios.put(`http://127.0.0.1:8000/clients/${idcliente}`, nuevoCli).then(()=>{

alert("cliente editado correctamente")

}).catch(()=>{
alert("No se pudo editar el cliente")

})


}

useEffect(()=>{

if(idcliente){

    axios.get(`http://127.0.0.1:8000/clients/${idcliente}`).then((response)=>{

    setClinete(response.data)

    })

}

},[idcliente])

return(
<>
<h1>Aca va el Formularuio de Clientes</h1>

<input onChange={(e)=>CambioEnFormulario(e.target)} name='nombre' value={nombre} className="form-control w-50 ms-5 mb-3" type="text" placeholder="Nombre"/>
<input onChange={(e)=>CambioEnFormulario(e.target)} name='password' value={password} className="form-control w-50 ms-5 mb-3" type="password" placeholder="Password"/>
<input onChange={(e)=>CambioEnFormulario(e.target)} name='email' value={email} className="form-control w-50 ms-5 mb-3" type="email" placeholder="Email"/>
<input onChange={(e)=>CambioEnFormulario(e.target)} name='telefono' value={telefono} className="form-control w-50 ms-5 mb-3" type="text" placeholder="Telefono"/>
<input onChange={(e)=>CambioEnFormulario(e.target)} name='cuil' value={cuil} className="form-control w-50 ms-5 mb-3" type="text" placeholder="Cuil"/>
<input onChange={(e)=>CambioEnFormulario(e.target)} name='dni' value={dni} className="form-control w-50 ms-5 mb-3" type="text" placeholder="Dni"/>

<button className='btn btn-warning ms-5' onClick={()=>{idcliente ? EditarCliente() : AgregarCliente()}}>{idcliente ? 'Editar' : 'Agregar'}</button>
<button className='btn btn-warning ms-3' onClick={()=>{history.push('/administrador/clientes')}}>Volver</button>
</>
)
}
export default FormularioClientes