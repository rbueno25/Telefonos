import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/card'
import telefono1 from '../assets/Telefonos/s23series.jpeg'
import '../css/Home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <div className="card-container">
      <div className="cards-group">
        
        <Card image={telefono1} title="Samsung Galaxy s23 Series" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, molestias!" button="Ver mas" />
        <Card image={telefono1} title="LALAL" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, molestias!" button="Ver mas" />
        <Card image={telefono1} title="LALAL" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, molestias!" button="Ver mas" />
      </div>
    </div>
    </>
  )
}

export default Home