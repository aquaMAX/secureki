import * as React from 'react'
import styled from "styled-components";
//import SecurekiLogo from "../../assets/securekianimated.gif"
import SecurekiLogo from "../../assets/SECUREKi Logo.svg"
import SecurekiAnimated from "../../assets/SECUREKI_LOGO_ANIMATION.mp4"
import { Link } from 'gatsby'

const LogoStyling = styled.video`
    max-height: 2.6875em;
    max-width: 12.0625em;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 1.125em;
    overflow: hidden;
    margin-left: 10.8875em;
    border: none;
    border-width: 0;
    @media (max-width: 1439px) {
        margin-left: 3.125rem;
    }
`;

const Logo = () => {
    return (
        <a href="http://secureki.maverickstudio.pl/">
            <LogoStyling autoPlay muted>
                <source src={SecurekiAnimated} type="video/mp4" />
            </LogoStyling>
        </a>
    )
}

export default Logo;



