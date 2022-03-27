import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";


const MostrarMensajes=()=>{

const history = useHistory()

const [mensajes, setMensajes] = useState([])


const TraerMensajes=()=>{

axios.get('http://localhost:8000/messages/').then((response)=>{

    setMensajes(response.data)
    
}).catch(()=>{alert('Error al traer datos de la Base de datos')})


}

const BorrarMensaje=(codigo)=>{

axios.delete(`http://localhost:8000/messages/${codigo}`).then(()=>{

alert('Mensaje Borrado')
TraerMensajes()

}).catch(()=>{alert('Error al Borrar')})

}

useEffect(()=>{TraerMensajes()},[])

return(
<>
<div className="row justify-content-center">
     <div className="col-3">
            <h1>Mensajes Enviados</h1>
            
    </div>
    <div className="col-12">
    <button onClick={()=>{history.push('/administrador')}} className="btn btn-warning ms-5 ps-5 pe-5 ">Volver</button>
    </div>
    <div >
        {mensajes.map(mensaje =>{
            
            return <div className='mensajes border border-primary m-5 bg-light'>
            
             <h3>{mensaje.nombre}</h3>
             <h4>{mensaje.correo}</h4>
             <h5>{mensaje.titulo}</h5>       
             <h6>{mensaje.fecha}</h6>
             <p>{mensaje.mensaje}</p>

             <div className="row justify-content-center">   
             <div className="col-1">   
             <button onClick={()=>{BorrarMensaje(mensaje.codigo)}} className="btn btn-danger ps-5 pe-5 m-5">Borrar</button>
             </div>
             </div>
            </div>

        })}


    </div>
    <div className="col-12">
    <button onClick={()=>{history.push('/administrador')}} className="btn btn-warning ms-5 mb-5 ps-5 pe-5 ">Volver</button>
    </div>

</div>

</>
)
}
export default MostrarMensajes