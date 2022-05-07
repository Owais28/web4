import React from 'react'
import { Card, CardWithImg } from '../styles/Cards.styled'
import Container from '../styles/Container.styled'
import { GridOfOne, GridOfTwo } from '../styles/Grids.styled'
import { HeadingFour, HeadingTwo } from '../styles/Headings.styled'
import { SectionWithImage2 } from '../styles/Sections.styled'
import bgImg from '../images/621910ba491098472935e247_bg-blur-2-web3-webflow-ecommerce-template (1).png'
import { BsPerson } from 'react-icons/bs'
import {BiWalletAlt} from 'react-icons/bi'
import {RiPieChartLine} from 'react-icons/ri'
import mockup from '../images/6218ed2f2822d03571e50f57_real-time-trading-image-web3-webflow-ecommerce-template.png'
import { ButtonGrp, ButtonPrimary, ButtonSecondary } from '../styles/Buttons.styled'

export default function GetStarted() {
  return (
    <SectionWithImage2 className='pt-5 pb-5' bg={bgImg}>
        <Container>
            <HeadingTwo className='text-center mb-1'>
            Get started with Web3 in 3 easy steps
            </HeadingTwo>
            <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua u
            </p>
            <GridOfTwo className='mt-4 mb-4'>
                <GridOfOne>
                    <Card className='flex'>
                        <BsPerson className='Icon mr-2'/>
                        <HeadingFour>
                            Create Your account
                        </HeadingFour>
                    </Card>
                    <Card className='flex'>
                        <BiWalletAlt className='Icon mr-2'/>
                        <HeadingFour>
                            Create Your first wallet
                        </HeadingFour>
                    </Card>
                    <Card className='flex'>
                        <RiPieChartLine className='Icon mr-2'/>
                        <HeadingFour>
                            Buy and trade crypto
                        </HeadingFour>
                    </Card>
                </GridOfOne>
                
                <CardWithImg boxShadow= {true} className='mockup-img'>
                    <img src={mockup} alt=""/>
                </CardWithImg>
            </GridOfTwo>
            <ButtonGrp className='center'>
                <ButtonPrimary className='mr-2'>Get started</ButtonPrimary>
                <ButtonSecondary>
                    Brows features
                </ButtonSecondary>
            </ButtonGrp>
        </Container>
    </SectionWithImage2>
  )
}
