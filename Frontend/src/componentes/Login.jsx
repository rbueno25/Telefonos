import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="Login">
        <form action="" className="frm">
          <div className="encabezado-login">
          <h1 className="titulo">Login</h1>
          </div>

          <div className="input-groupt">
            <div className="input-feild">
              <div className="lala">
                <label htmlFor="">Usuario</label>
                <input
                  type="text"
                />
              </div>
            </div>
            <div className="input-feild">
              <div className="lala">
                <label htmlFor="">Contraseña </label>
                <input
                  type="password"
                />
              </div>
            </div>
          </div>

          <div className="button">
            <button>Enviar</button>
          </div>
        </form>
      </div>
  );
};

export default Login;