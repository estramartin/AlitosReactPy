import React from "react";
import { BrowserRouter, Switch, Route,Redirect,Link } from "react-router-dom";
import Contactos from "./components/body/Contactos/Contactos";
import Inicio from "./components/body/Inicio/Inicio";
import Nosotros from "./components/body/Nosotros/Nosotros";
import Productos from "./components/body/Productos/Productos";
import Dulces from "./components/body/Productos/Sabores/Dulces";
import Licores from "./components/body/Productos/Sabores/Licres";
import Mermeladas from "./components/body/Productos/Sabores/Mermeladas";
import PuntosVenta from "./components/body/puntos-venta/Puntos-venta";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/menu";
import Administrar  from "./components/Admin/Administrador";
import AdminProducto from "./components/Admin/componentsAdmin/AdminProducto";
import VerClientes from "./components/Admin/componentsAdmin/VerClientes";
import VerProductos from "./components/Admin/componentsAdmin/VerProductos";
import VerPuntosVenta from "./components/Admin/componentsAdmin/VerPuntosVenta";
import FormularioClientes from "./components/Admin/componentsAdmin/Formularios/FormularioClientes";
import FormularioSellpoint from "./components/Admin/componentsAdmin/Formularios/FormularioSellpoint";
import VerInicio from "./components/Admin/componentsAdmin/VerInicio";
import MostrarMensajes from "./components/Admin/componentsAdmin/VerMensajes";


const RouterComponent =()=>{


return(
    <BrowserRouter>
    <Menu/>

    <nav className="bg-dark w-100 ">
    <Link to="/inicio" className="btn btn-warning m-2">Inicio</Link>
    <Link to="/productos" className="btn btn-warning m-2">Productos</Link>
    <Link to="/nosotros" className="btn btn-warning m-2">Nosotros</Link>
    <Link to="/puntos-ventas" className="btn btn-warning m-2">Puntos de venta</Link>
    <Link to="/contactos" className="btn btn-warning m-2">Contactos</Link>
    <Link to="/administrador" className="btn btn-warning m-2">administrador</Link>
    </nav>


    <Switch>
   
       
        <Route path ='/inicio' component={Inicio}/>
       
        <Route exact path ='/productos/mermeladas' component={Mermeladas} />
        <Route exact path ='/productos/licores' component={Licores}/>
        <Route exact path ='/productos/dulces' component={Dulces}/>
        <Route exact path ='/productos' component={Productos}/>
       
        <Route path ='/nosotros' component={Nosotros}/>
       
        <Route path ='/puntos-ventas' component={PuntosVenta}/>
        
        <Route path ='/contactos' component={Contactos}/>
        ////////////////////////////////ADMINISTRACION//////////////////////////////////////////
        <Route path ='/administrador/productos' exact component={VerProductos}/>
        <Route path ='/administrador/agregar-producto' exact component={AdminProducto}/>
        <Route path ='/administrador/agregar-producto/:idproducto' exact component={AdminProducto}/>

        <Route path ='/administrador/puntos-de-venta' exact component={VerPuntosVenta}/>
        <Route path ='/administrador/add-sellpoint' exact component={FormularioSellpoint}/>
        <Route path ='/administrador/add-sellpoint/:idsellpoint' exact component={FormularioSellpoint}/>

        <Route path ='/administrador/inicio' exact component={VerInicio}/>
        
        <Route path ='/administrador/clientes' component={VerClientes}/>
        <Route path ='/administrador/agregar-cliente' exact component={FormularioClientes}/>
        <Route path ='/administrador/agregar-cliente/:idcliente' exact component={FormularioClientes}/>

        <Route path ='/administrador/ver-mensajes' component={MostrarMensajes} />   

        <Route exact path ='/administrador' component={Administrar}/>
        
        <Route exact path ='/' > <Redirect to='/inicio'/> </Route>
    
    </Switch>    
    <Footer/>
    </BrowserRouter>
)
}
export default RouterComponent