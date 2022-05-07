import styled from 'styled-components';
import heroImg from '../images/621910ba491098472935e247_bg-blur-2-web3-webflow-ecommerce-template.png'

export const Section = styled.div`
    width:100%;
    background-color : ${props => props.bgColor};
`
export const HeroSection = styled(Section)`
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
`

