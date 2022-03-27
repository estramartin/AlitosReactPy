import React from 'react';
import logo from '../../assets/logo.png';
import Banner from './Banner';






const Menu = (props) => {

 


  




  return (

    <div className="row  align-items-end bg-body text-dark">

      <div className="col-2 ">
        <img src={logo} className="img-thumbnail" alt="" />
      </div>
      <div className=" col-10">

        <Banner/>
      </div>
    </div>



)
}
export default Menu;