import React from 'react'
import {FiMenu} from 'react-icons/fi'
// Styles 
import '../index.css'
import heroImg from '../images/6217cc8fc720654e5d968fa0_home-hero-image-web3-webflow-ecommerce-template.png'
export default function Header() {
  return (
    <header>
        <div className="section section-hero">
            {/* Container for Navbar */}
             <nav className='container'>
                 <ul className="navbar">
                     <li>
                         <h2 className='navbar-logo'>Web3</h2>
                     </li>
                     <li>
                         <FiMenu className='menu-icon'/>
                     </li>
                 </ul>
             </nav>
            <div className="container pt-3">
                <div className="grid-2">
                    <div className="hero-section">
                        <h1 className='font-display-1'>Buy growing crypto right from your phone</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</p>
                        <div className="btn-grp">
                            <button className='btn btn-primary'>Get Started</button>
                            <button className='btn btn-secondary'>Brows Featers</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
