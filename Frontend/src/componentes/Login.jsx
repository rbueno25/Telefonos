import React from 'react';
import '../css/Login.css';
import { MdOutlinePhoneIphone } from "react-icons/md";


const Login = () => {
  return (
    <div className="Login">
      <div className="encabezado">
          <h1>
            <MdOutlinePhoneIphone className='icono'/>
            Tecnocel
          </h1>
      </div>
      <div className="opciones">
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </div>
      <form action="" className='frm'>
        <div className="input-group">

          <div className="input-feild">
            <label htmlFor="" >Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-feild">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Username" />
          </div>
       
          <div className="mantener">
            <input type="checkbox" id="remember" className="custom-checkbox" />
            <label htmlFor="remember">Remember password</label>
          </div>
        </div>
        <div className="boton">
          <input type="submit" value="Login" />
        </div>

        <a href="" className='olvidar'>Forgot password?</a>
      </form>
      </div>
  );
};

export default Login;