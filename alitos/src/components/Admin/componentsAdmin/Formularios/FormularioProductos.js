import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router";



const Formulario = (props) => {



   const [producto, setProducto] = useState({
      codigo: '',
      codigo_tipo: '',
      gusto: '',
      tamanio: '',
      precio: '',
      activado: ''
   })

   const { idproducto } = useParams();
   const [gustos, setGustos] = useState([]);

   const history = useHistory();

   const { codigo, codigo_tipo, gusto, tamanio, precio, activado } = producto;

   const nuevoProducto = () => {

      return {

         codigo: 0,
         codigo_tipo: codigo_tipo,
         gusto: gusto,
         tamanio: tamanio,
         precio: precio,
         activado: true


      }

   }

   const TraerGustos = () => {

      axios.get(`http://localhost:8000/products/gustos/`).then((response) => {

         setGustos(response.data)



      }).catch(() => {

         alert('Error al Traer');

      })

   }


   const CargarProducto = () => {

      const nuevoProd = nuevoProducto();


      axios.post(`http://127.0.0.1:8000/products`, nuevoProd).then(() => {

         alert('Producto Agregado Corectamente')
         history.push('/administrador/productos')
      }).catch(() => {

         alert("Error al agregar");
      })
   }


   const EditarProducto = () => {

      const nuevoprod = nuevoProducto()

      axios.put(`http://127.0.0.1:8000/products/${idproducto}`, nuevoprod).then(()=>{

      alert('Elemento Modificado Correctamente')
      history.push('/administrador/productos')
      }).catch(()=>{

      alert('Error al Editar')

      })


   }


   const CambioEnFormulario = (targetEvent) => {
      setProducto({ ...producto, [targetEvent.name]: targetEvent.value })
   }

 


   useEffect(() => {

      TraerGustos()
      if (idproducto) {

         axios.get(`http://127.0.0.1:8000/products/${idproducto}`).then((response) => {

            setProducto(response.data[0].Productos)


         })

      }


   }, [idproducto])

   return (
      <>
         <h1>{props.nombre}</h1>

         <select onChange={(e) => CambioEnFormulario(e.target)} name='codigo_tipo' value={codigo_tipo} class="form-select" aria-label="Default select example">
            <option hidden>Tipo de Producto</option>
            {gustos.map((g) => {
               return <option value={g.codigo}>{g.nombre}</option>


            })}
         </select>


         <input class="form-control" type="text" onChange={(e) => CambioEnFormulario(e.target)} name='gusto' value={gusto} placeholder="Gusto" aria-label="default input example" />
         <input class="form-control form-control-sm" onChange={(e) => CambioEnFormulario(e.target)} name='tamanio' value={tamanio} type="text" placeholder="Tamaño" aria-label=".form-control-sm example" />
         <input class="form-control form-control-lg" onChange={(e) => CambioEnFormulario(e.target)} name='precio' value={precio} type="text" placeholder="Precio" aria-label=".form-control-lg example" />
         <button className="btn btn-warning mt-5" onClick={idproducto ? EditarProducto:CargarProducto}>{idproducto ? "Editar" : "Agregar"}</button>
         <button className="btn btn-warning mt-5 ms-4" onClick={() => { history.push('/administrador/productos') }}>Volver</button>




      </>
   )

}
export default Formulario