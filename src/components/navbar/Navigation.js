import React from 'react'
import styled from 'styled-components'
import Information from './Information'
import Logo from './Logo'

const Nav = styled.nav`
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(7, 50, 51, 0.04);
    height: 56px;
`;

const Navigation = () => {
    return (
        <>
        <Information/>
        <Nav>
            <Logo/>
        </Nav>
        </>
    )
}




export default Navigation
