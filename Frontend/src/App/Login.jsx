import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';
import { MdOutlinePhoneIphone } from "react-icons/md";

const Login = () => {

  const [value, setValue] = useState({
    username: '',
    password: ''
  });

  const onchange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({
      ...value,
      [name]: inputValue
    });
  }

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5264/api/Login', value)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate('/');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginn">
      <div className="Login">
        <div className="encabezado-login">
          <h1>
            <MdOutlinePhoneIphone className='icono' />
            Tecnocel
          </h1>
        </div>
        <div className="opciones">
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </div>
        <form action="" className='frm' onSubmit={handleSubmit}>
          <div className="input-group">

            <div className="input-feild">
              <label htmlFor="" >Username</label>
              <input type="text" required placeholder="Username" name='username' value={value.username} onChange={onchange}/>
            </div>
            <div className="input-feild">
              <label htmlFor="">Password</label>
              <input type="password" required placeholder="Password"  name='password' value={value.password} onChange={onchange} />
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
    </div>
  );
};

export default Login; 