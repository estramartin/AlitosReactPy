import React from 'react'

const BotonMenu =(props)=>{
return(
<>
<button className="btn btn-warning px-4" onClick={()=>props.indiceMenu(props.index)} >{props.elemento}</button>
</>
)
}
export default BotonMenu
