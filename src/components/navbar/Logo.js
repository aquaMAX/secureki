import * as React from 'react'
import styled from "styled-components";
//import SecurekiLogo from "../../assets/securekianimated.gif"
import SecurekiLogo from "../../assets/SECUREKi Logo.svg"
import { Link } from 'gatsby'

const LogoStyling = styled.img`
    height: 2.6875em;
    width: 12.0625em;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 1.125em;
    position: absolute;
    margin-left: 10.8875em;
    

    @media (max-width: 1439px) {
        margin-left: 3.125rem;
    }
`;

const Logo = () => {
    return (
        <Link to="http://secureki.maverickstudio.pl/">
            <LogoStyling src={SecurekiLogo} />
        </Link>
    )
}

export default Logo;


