import React from "react";
import Formulario from "./Formularios/FormularioProductos";
import MenuAdmin from "../MenuAdmin";


const AdminProducto = (props) => {



    return (
        <div className="administrador">

            <h1>{props.nombre}</h1>
            <div className="row">
                <div className="col-2">
                    <MenuAdmin />
                </div>
                <div className="col-6 mt-5">
                    <Formulario ></Formulario>
                </div>
            </div>

        </div>
    )

}
export default AdminProducto