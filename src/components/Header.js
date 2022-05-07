import React from 'react'
import {FiMenu} from 'react-icons/fi'
import { HeroSection } from '../styles/Sections.styled'
import Container from '../styles/Container.styled'
import {ButtonGrp, ButtonPrimary, ButtonSecondary} from '../styles/Buttons.styled'
import { HeadingOne } from '../styles/Headings.styled'
import { GridOfTwo } from '../styles/Grids.styled'

// Styles 
import '../index.css'
import heroImg from '../images/6217cc8fc720654e5d968fa0_home-hero-image-web3-webflow-ecommerce-template.png'
export default function Header() {
  return (
    <header>
        <HeroSection>
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
            <Container className="pt-3">
                <GridOfTwo>
                    <div className="hero-section">
                        <HeadingOne >Buy growing crypto right from your phone</HeadingOne>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</p>
                        <ButtonGrp>
                            <ButtonPrimary href='#'>Get Started</ButtonPrimary>
                            <ButtonSecondary href='#'>Brows Featers</ButtonSecondary>
                        </ButtonGrp>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt=""/>
                    </div>
                </GridOfTwo>
            </Container>
        </HeroSection>
    </header>
  )
}
