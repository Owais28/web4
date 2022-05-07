import React from 'react'
import Container from '../styles/Container.styled'
import { GridOfThree, GridOfTwo } from '../styles/Grids.styled'
import { HeadingTwo } from '../styles/Headings.styled'
import { Section } from '../styles/Sections.styled'
import {BsArrowLeftRight} from 'react-icons/bs'
import features from '../data/features'
import Feature from './Feature'
import { ButtonGrp, ButtonPrimary, ButtonSecondary, ButtonGrpCenter } from '../styles/Buttons.styled'
export default function FeaturesSection() {
  return (
      <Section bg="cream" className='features-section'>
          <Container>
              <GridOfTwo className='feature-heading'>
              <HeadingTwo>
              Fully featured to buy, trade and invest in crypto
              </HeadingTwo>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id, aut, odio, repellendus dicta libero ullam deserunt consequuntur nostrum non voluptate ?</p>
              </GridOfTwo>
              <GridOfThree className='features'>
                  {
                      features.map(
                          feature => <Feature icon={feature.icon} feature={feature.feature} desc={feature.desc}/>
                      )
                  }
              </GridOfThree>
              <ButtonGrpCenter>
                  <ButtonPrimary mgright="15px" href='#'>Get started</ButtonPrimary>
                  <ButtonSecondary href='#'>View pricing</ButtonSecondary>
              </ButtonGrpCenter>
          </Container>
      </Section>
  )
}
