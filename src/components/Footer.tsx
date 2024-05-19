import { FooterWrapper } from "./FooterStyles"
import { LogoImg } from "./slider/HomeSliderStyles"
import logo from "../assets/images/logo.png";


const Footer = ()=>{
    return <FooterWrapper>
        <LogoImg src={logo} alt="logo" />
    </FooterWrapper>
}

export default Footer