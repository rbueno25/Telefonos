import React from 'react'
import '../css/Navbar.css'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className="barra">
        <div className="encabezado-nav">
            <h1 className='titulo'><MdOutlinePhoneIphone className='icono'/>Tecnocel</h1>
        </div>
        <div className="nav-list">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Hola</a></li>
            </ul>
        </div>
        <div className="barra-busqueda">
            <div className="barrita">
                <input type="text" placeholder="Buscar..."/>
                <button  className='search-icon'> <IoIosSearch /> </button>
            </div>
        </div>
        <div className="botones">
            <div className="iconoL">
                <FaFacebook className='facebook'/>
            </div>
            <div className="iconoL">
                <FaInstagram className='instagram'/>
            </div>
            <div className="iconoL">
                <button className='user'>
                    <FaUser className='u'/>
                    Iniciar Sesión
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar