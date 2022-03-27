import React from 'react';
import '../Productos/styles-productos.css';
import Item from '../Productos/items';
import dulces from '../../../assets/Img/Dulces.png'
import licores from '../../../assets/Img/Licores.png'
import mermeladas from '../../../assets/Img/Mermeladas2.png'




const Productos =()=> {

return(
    <>
        <div id="conteiner" className="row justify-content-center pb-5 pt-5">

            <Item ruta='dulces' logo = {dulces} nombre="Dulces" parrafo="Los mejores dulces del país "  ></Item>
            <Item ruta='licores' logo = {licores} nombre="Licores" parrafo="Los mejores licores del país "></Item>
            <Item ruta='mermeladas' logo = {mermeladas} nombre="Mermeladas" parrafo="Las mejores mermeladas del país "></Item>

        </div>

    </>
)
}
export default Productos