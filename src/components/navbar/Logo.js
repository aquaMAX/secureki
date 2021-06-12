import * as React from 'react'
import styled from "styled-components";
//import SecurekiLogo from "../../assets/securekianimated.gif"
import SecurekiLogo from "../../assets/logo.svg"

const LogoStyling = styled.img`
    height: 43px;
    width: 193px;
    border-radius: 0px;
    margin-bottom: 0px;
    margin-top: 18px;
    position: absolute;
`;

const Logo = () => {
    return (
        <LogoStyling src={SecurekiLogo} />
    )
}

export default Logo;



