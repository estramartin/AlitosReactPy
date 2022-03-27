import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FormularioSellpoint =()=>{

    const {idsellpoint} = useParams()
    const history = useHistory()
    const [sellPoint, setSellPoint]= useState({
    codigo: 0,
    nombre: "",
    direccion:"",
    localidad:"",
    slogan:"" 
    })

    const {codigo, nombre, direccion, localidad, slogan} = sellPoint
    
    const nuevoSellPoint=()=>{

        return{
            codigo: 0,
            nombre: sellPoint.nombre,
            direccion: sellPoint.direccion,
            localidad: sellPoint.localidad,
            slogan: sellPoint.slogan
        }


    }


    const AgregarSellPoint=()=>{

        const newSellPoint = nuevoSellPoint();

        axios.post('http://localhost:8000/sellpoints/', newSellPoint).then(()=>{

            alert("Punto de venta agregado correctamente")
            history.push('/administrador/puntos-de-venta')

        }).catch(()=>{

            alert("No se pudo agregar el punto de venta")
        })

    }

    const EditarSellPoint=()=>{

        const nuevoSell = nuevoSellPoint()

        axios.put(`http://localhost:8000/sellpoints/${idsellpoint}`, nuevoSell).then(()=>{
        history.push('/administrador/puntos-de-venta')
        alert("Punto de venta actualizado")

        }).catch(()=>{

            alert("No se pudo actualizar")
        })


    }

    useEffect(()=>{

        if(idsellpoint){

            axios.get(`http://localhost:8000/sellpoints/${idsellpoint}`).then((response)=>{

                setSellPoint(response.data)
                
            })

        }

    },[idsellpoint])

    const CambioEnFormulario =(EventTarget)=>{

        setSellPoint({...sellPoint,[EventTarget.name]:EventTarget.value})

    }

    return(
        <>

        <h1>FORMULARIO SELLPOINTS</h1>

        <input onChange={(e)=>{CambioEnFormulario(e.target)}} className="form-control w-50 ms-5 mb-3" name='nombre' value={nombre} type="text" placeholder="Nombre del local" />
        <input onChange={(e)=>{CambioEnFormulario(e.target)}} className="form-control w-50 ms-5 mb-3" name='direccion' value={direccion} type="text" placeholder="Direccion del local" />
        <input onChange={(e)=>{CambioEnFormulario(e.target)}} className="form-control w-50 ms-5 mb-3" name='localidad' value={localidad} type="text" placeholder="Localidad" />
        <input onChange={(e)=>{CambioEnFormulario(e.target)}} className="form-control w-50 ms-5 mb-3" name='slogan' value={slogan} type="text" placeholder="Slogan" />


        <button className ="btn btn-warning ms-5" onClick={()=>{idsellpoint ? EditarSellPoint() : AgregarSellPoint()}} >{idsellpoint ? 'Editar' : 'Agregar'}</button>
        <button className="btn btn-warning ms-3" onClick={()=>history.push('/administrador/puntos-de-venta')} >Volver</button>
        </>
    )
}
export default FormularioSellpoint