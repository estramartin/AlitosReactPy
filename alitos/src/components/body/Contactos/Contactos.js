import axios from "axios";
import React, { useState } from "react";
import '../Contactos/styles-contacto.css'
import { useHistory } from "react-router";
const Contactos=()=>{

const history = useHistory()


const [nuevomensaje, setMensaje] = useState({

    codigo: 0,
    nombre: '',
    correo:'',
    titulo: '',
    fecha: '',
    mensaje:''


})

const {codigo, nombre, correo, titulo, mensaje, fecha}= nuevomensaje

const NuevoMensaje=()=>{

    return{
        codigo: 0,
        nombre: nombre,
        correo:correo,
        titulo: titulo,
        fecha: Date.now(),
        mensaje:mensaje
    }
}


const CambioFormulario=(e)=>{

    setMensaje({...nuevomensaje, [e.name]: e.value})

}

const PostearMensaje=()=>{

const nuevo = NuevoMensaje()

axios.post('http://localhost:8000/messages/', nuevo).then(()=>{

alert('Mensaje enviado con exito')
history.push('/inicio')

}).catch(()=>{

    alert('Ocurrio un error al enviar, intentelo de nuevo mas tarde')

})
}



return(<>


<div id="form" className="contacto" >
<h1>Contactanos!</h1>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"><strong><h5> Correo electronico</h5></strong></label>
  
  <input onChange={(e)=>{CambioFormulario(e.target)}} type="email" name='correo' value={correo} class="form-control" id="exampleFormControlInput1" placeholder="ej: nombre@ejemplo.com"/>
  
  <label for="exampleFormControlInput1" className="form-label mt-3"><strong><h5>Nombre y Apellido</h5></strong></label>
  
  <input onChange={(e)=>{CambioFormulario(e.target)}} type="text" className="form-control" name='nombre' value={nombre} id="exampleFormControlInput1" placeholder="ej: Nombre Apellido"/>
  
  <label for="exampleFormControlInput1" className="form-label mt-3"><strong><h5>Asunto</h5></strong></label>
  
  <input onChange={(e)=>{CambioFormulario(e.target)}} type="text" className="form-control" name='titulo' value={titulo} id="exampleFormControlInput1" placeholder="ej: Deseo ponerme en contacto"/>

</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"><strong><h5>Contenido:</h5></strong></label>
  <textarea onChange={(e)=>{CambioFormulario(e.target)}} className="form-control pb-5" name='mensaje' value={mensaje} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button onClick={()=>{PostearMensaje()}} className='btn btn-primary mt-4'>Enviar</button>  
  <button onClick={()=> history.push('/inicio')} className='btn btn-danger ms-4 mt-4'>Cancelar</button>  

</div>


</div>







{/* 
<div className="contacto row justify-content-center pt-5">
                <div className="col-6">
               
                <h1>Contactos</h1>
               
               <a href="mailto:estramartin@gmail.com" className="btn btn-warning">Contactanos Por Email</a>

                </div>
            </div> */}


</>
)

}
export default Contactos