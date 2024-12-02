import React from 'react'
import '../css/Banner.css'
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <>
    <div className="container-banner">
        <div className="banner">
            <div className="banner-content">
                <div className="ban">
                    <h1 className="banner-title">Welcome to our store</h1>
                    <p className="banner-text">We have the best products for you</p>
                    <button className="banner-button">
                        Shop Now
                        <FiArrowUpRight className="icon"/>
                        </button>
                </div>
            </div>
        <div className="banner-image">
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner