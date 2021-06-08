import * as React from 'react'
import styled from "styled-components";
//import SecurekiLogo from "../../assets/securekianimated.gif"
import SecurekiLogo from "../../assets/logo.svg"

const LogoStyling = styled.img`

height: 43px;
width: 193px;
left: 163px;
top: 18px;
border-radius: 0px;


position: absolute;
left: 11.32%;
right: 75.28%;
top: 5.38%;
bottom: 20.78%;

`;

const Logo = () => {
    return (
        <LogoStyling src={SecurekiLogo} />
    )
}

export default Logo;



