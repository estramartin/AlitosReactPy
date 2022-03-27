import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuAdmin from "../MenuAdmin";

const VerInicio = (props) => {

  const urls = ["http://localhost:8000/img/file/1", "http://localhost:8000/img/file/2", "http://localhost:8000/img/file/3", "http://localhost:8000/img/file/4", "http://localhost:8000/img/file/5", "http://localhost:8000/img/file/6", "http://localhost:8000/img/file/7", "http://localhost:8000/img/file/8"]

  const [img, setImg] = useState({

    codigo: 0,
    nombre: '',
    imagen: null


  })

  const { codigo, nombre, imagen } = img




  const NuevaImg = () => {

    return {
      codigo: 0,
      nombre: imagen.name,
      imagen: imagen
    }

  }
  

  const SubirImagen = () => {

    
    const nueva = NuevaImg();

    if (nueva.imagen !== null) {

      console.log(nueva)

    
      axios.post(`http://localhost:8000/img/upload`, nueva).then(() => {

        alert('Imagen Subida Correctamente')

      }).catch(() => {

        alert('Error al subir imagen')

      })
    } else {


      console.log('no se pudo')
    }

  }

  const FileChange = (e) => {

    setImg({ imagen: e.target.files[0] })
    console.log(img)
  }


  useEffect(() => { }, [])




  return (
    <>
      <div className="row">
        <div className="col-2">
          <MenuAdmin></MenuAdmin>
        </div>
        <div className="col-8 text-center">
          <h1>Imagenes del Inicio</h1>
        </div>
        <div>
          <h1>Upload and Display Image usign React Hook's</h1>
          <div className="row justify-content-center">
            {urls.map(url => {
              console.log(url)

              return <div className="carta">
                <img src={url} />
              </div>





            })}
          </div>


          <input type="file" name="file0" onChange={(e) => FileChange(e)} />
          <button onClick={() => SubirImagen()}> Subir Imagen</button>
          {/* {img2 && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(img2)} />
        <br />
        <button onClick={()=>setImg2(null)}>Remove</button>
        <button onClick={()=>setImg2()}>Guardar</button>
        <button onClick={()=>SubirImagen()}>Subir</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="nombre"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImg2(event.target.files[0]);
        }}
      /> */}
        </div>
      </div>
    </>
  )

}
export default VerInicio