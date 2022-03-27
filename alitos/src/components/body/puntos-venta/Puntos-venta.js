import React, { useEffect, useState } from "react";
import RinconadaLocal from '../../../assets/Puntos de Venta/La Rinconada/local.png';
import LogoRandom from '../../../assets/Img/logo.png';
import axios from "axios";

const PuntosVenta = () => {

    const locales = [
        {
            nombre: 'La Rinconada',
            imagenLogo: RinconadaLocal,
            imagenLocal: RinconadaLocal,
            direccion: 'Mexico y Catamarca - Paraná - Entre Rios',
            slogan: 'Punto de sabores'
        },
        {
            nombre: 'DrugStore Santa Fe',
            imagenLogo: LogoRandom,
            imagenLocal: LogoRandom,
            direccion: 'Urquiza 1200 - Paraná - Entre Rios',
            slogan:''
        },
        {
            nombre: 'ESTANCIA LO DE NILDA',
            imagenLogo: LogoRandom,
            imagenLocal: LogoRandom,
            direccion: 'Av. Zanni 872 - Paraná - Entre Rios',
            slogan:''
        },
        {
            nombre: 'DISTRIBUCION DIRECTA',
            imagenLogo: LogoRandom,
            imagenLocal: LogoRandom,
            direccion: 'Cullen 1475 - Esperanza - Santa fe',
            slogan:''
        }
    ]

    const[sellpoint, setSellPoint]= useState([])

    const TraerSellPoints=()=>{

        axios.get('http://localhost:8000/sellpoints/').then((response=>{

            setSellPoint(response.data)
        })).catch(()=>{alert('Error')})



    }

    useEffect(()=>{TraerSellPoints()},[])
    return (
        <div className="bg-secondary">
            <div className="row justify-content-center ">
                <div className="col-2">
                    <h1>Puntos de Venta</h1>
                </div>
            </div>
            <div className="row justify-content-center  ">
                <div className="col-12 ">

                    {sellpoint.map(x => {
                       
                        return (
                            
                            <div className="card mb-3 tarjeta" >
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src= {LogoRandom} class="img-fluid rounded-start" alt="..."/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h1 className="card-title">{x.nombre}</h1>
                                  <p className="card-text">{x.direccion}</p>
                                  <p className="card-text">{x.localidad}</p>
                                  <p className="card-text"><small class="text-muted">{x.slogan}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )

                    })}



                </div>
            </div>
        </div>
    )

}
export default PuntosVenta