import styled from 'styled-components';
import heroImg from '../images/621910ba491098472935e247_bg-blur-2-web3-webflow-ecommerce-template.png'
import MoreFeaturesImg from '../images/621e4efb05658f5a1c539b53_bg-blur-4-web3-webflow-ecommerce-template.jpg'


export const Section = styled.div`
    width:100%;
    background-color : ${props => props.bgColor};
`
export const HeroSection = styled(Section)`
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const SectionWithImage = styled(Section)`
    background-image: url(${MoreFeaturesImg});
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width:767px) {
        padding : 300px 0px;

    }
`

