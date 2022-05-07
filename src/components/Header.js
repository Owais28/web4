import React from 'react'
import {FiMenu} from 'react-icons/fi'
// Styles 
import '../index.css'

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
            <div className="container pt-5">
                <div className="grid-2">
                    <div className="hero-section">
                        <h1 className='font-display-1'>Buy growing crypto right from your phone</h1>
                        <p>Buy growing crypto right from your phone</p>
                        <div className="button-grp">
                            <button>Get Started</button>
                            <button>Brows Featers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
