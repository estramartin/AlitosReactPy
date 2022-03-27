import React from "react";
import BotonMenu from "./BotonMenu";


const MenuAdmin = () => {


    return (
        <>
           

            <div className="row justify-content-start mt-5 mb-5">
                <div className="col-3">
                                      
                    <BotonMenu nombre='Puntos de venta' ruta="puntos-de-venta"></BotonMenu>
                    <BotonMenu nombre='Inicio' ruta="inicio"></BotonMenu>
                    <BotonMenu nombre='Productos' ruta="productos"></BotonMenu>
                    <BotonMenu nombre='Clientes' ruta="clientes"></BotonMenu>
                    <BotonMenu nombre='Mensajes' ruta="ver-mensajes"></BotonMenu>
                </div>
            </div>
        </>
    )

}
export default MenuAdmin