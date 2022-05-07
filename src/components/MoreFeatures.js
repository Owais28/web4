import React from 'react'
import Container from '../styles/Container.styled'
import {SectionWithImage} from '../styles/Sections.styled'
import bgImg from '../images/621910ba491098472935e247_bg-blur-2-web3-webflow-ecommerce-template (1).png'
import { GridOfTwo, GridOfOne } from '../styles/Grids.styled'
import { HeadingThree, HeadingTwo } from '../styles/Headings.styled'
import { ButtonGrp, ButtonPrimary, ButtonPrimaryWhite, ButtonSecondary, ButtonSecondaryWhite } from '../styles/Buttons.styled'
import { CardWithImg } from '../styles/Cards.styled'
import wallet from '../images/6218ed30fe4e4f1ed4f9fbdc_crypto-wallet-from-the-future-image-web3-webflow-ecommerce-template-p-500.png'
// MoreFeatures Component
export default function MoreFeatures() {
  return (
      <SectionWithImage bg="transparent" className='pt-5 pb-5 text-white'>
          <Container>
              <GridOfTwo className="justify-start">
                  <div className="sticky-section">
                      <HeadingTwo>
                      What makes Web3 different?
                      </HeadingTwo>
                      <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem iure facilis aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas repudiandae, aliquid temporibus provident ad dolores consectetur laudantium magnam 
                      </p>
                      <ButtonGrp className='btngrp mb-2'>
                          <ButtonPrimaryWhite mgright="20px">
                              Get Started
                          </ButtonPrimaryWhite>
                          <ButtonSecondaryWhite>
                              Brows features
                          </ButtonSecondaryWhite>
                      </ButtonGrp>
                  </div>
                  <div>
                      <GridOfOne>
                          <CardWithImg>
                            <HeadingThree className="mb-0">
                            A crypto wallet from the future
                            </HeadingThree>
                            <p className="mb-1">
                            Tempus adipiscing at ultricies duis consequat mauris dictum massa maecenas egestas aliquam velit sit habitant in eu eu viverra aenean id nibh blandit.
                            </p>
                            <div className="morefeatures-img">
                            <img  src={wallet} alt=""/>
                            </div>
                            </CardWithImg>
                            <CardWithImg>
                            <HeadingThree className="mb-0">
                            A crypto wallet from the future
                            </HeadingThree>
                            <p className="mb-1">
                            Tempus adipiscing at ultricies duis consequat mauris dictum massa maecenas egestas aliquam velit sit habitant in eu eu viverra aenean id nibh blandit.
                            </p>
                            <div className="morefeatures-img">
                            <img  src={wallet} alt=""/>
                            </div>
                            </CardWithImg>
                            <CardWithImg>
                            <HeadingThree className="mb-0">
                            A crypto wallet from the future
                            </HeadingThree>
                            <p className="mb-1">
                            Tempus adipiscing at ultricies duis consequat mauris dictum massa maecenas egestas aliquam velit sit habitant in eu eu viverra aenean id nibh blandit.
                            </p>
                            <div className="morefeatures-img">
                            <img  src={wallet} alt=""/>
                            </div>
                            </CardWithImg>
                      </GridOfOne>
                  </div>
              </GridOfTwo>
          </Container>
      </SectionWithImage>
  )
}
