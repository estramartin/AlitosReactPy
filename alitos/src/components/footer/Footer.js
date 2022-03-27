import React from 'react';

import Iframe from './mapa';
import Redes from './redes';
import './footer.css';



const Footer = () => {


    return (
        <>
            <div className="row footer">
                <div className="col-12">
                    <h2 className="text-light text-center ">Nos Encontramos en: </h2>
                </div>
                <div>
                    <div className="row justify-content-start">
                    <h3 className="texto-redes">REDES:</h3> 
                                

                        <ul className="col-4 mt-3">
                       

                           <li> <Redes icono='d' red='INSTAGRAM' linka='https://www.instagram.com/alitos.productos/?hl=es'/></li> <br />

                           <li> <Redes icono='F' red='FACEBOOK' linka='https://www.facebook.com/alitos.productos' /> </li>
                        </ul>
                        <div className="col-2 ">

                            <Iframe />
                        </div>
                    </div>





                </div>

            </div>



        </>
    )
}
export default Footer;