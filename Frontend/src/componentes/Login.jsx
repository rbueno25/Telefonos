import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="Login">
      <h1>lalalal</h1>
      <div className="opciones">
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </div>
      <form action="" className='frm'>
        <div className="input-group">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        </div>

        <div className="mantener">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remenber password</label>
        </div>
        <div className="boton">
          <input type="submit" value="Login" />
        </div>
      </form>
      </div>
  );
};

export default Login;