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
`;

const Logo = () => {
    return (
        <Link to="../">
            <LogoStyling src={SecurekiLogo} />
        </Link>
    )
}

export default Logo;



