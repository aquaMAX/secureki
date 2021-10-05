import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button';
import Information from './Information'
import Logo from './Logo'

import { Row, Col } from 'react-bootstrap';
import DropdownMenu from './Dropdown';
import Media from 'react-media'
import Mobile from './Mobile';
import ContactForm from './ContactForm';

const Nav = styled.nav`

    height: 4.8125em;
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }

`;

const Triangle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 2.375em;
    width: 0;
    height: 0;
    border-left: 0.1875em solid transparent;
    border-right: 0.1875em solid transparent;
    border-top: 0.28125em solid #FF6938;
`

const StyledLogo = styled(Col)`
    
`

const StyledDropdown = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 0.3s;
    @media (min-width: 1200px) and (max-width: 1439px) {
        min-width: 21.875rem;
        margin-left: -1.875rem;
    }
`

const StyledRow = styled(Row)`
    margin-left: 0px;
    margin-right: 0px;


`

const StyledCol = styled(Col)`
    padding-left: 0px;
`

const StickyInner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #FFFFFF;
    box-shadow: 0 0.25em 1.25em rgba(7, 50, 51, 0.04);
`



const StyledStartedButton = styled(Button)`
    font-family: Messina Sans bold;
    margin-left: 9.1875em;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
    }
`

const MobileDisplayer = styled.div`
    @media (min-width: 994px) {
        display: none;
    }
`

const DesktopDisplayer = styled.div`
    @media (max-width: 993px) {
        display: none;
    }
`

const StyledNavCol = styled(Col)`
    @media (min-width: 1200px) and (max-width: 1439px) {
        padding: 0;
    }
`

const Navigation = () => {
    return (
        <StickyInner className="sticky-inner">
            
                                <>
                                 <MobileDisplayer>
                                     <Mobile />
                                    </MobileDisplayer>
                                 <DesktopDisplayer>
                                            <Information/>
                                            <Nav>
                                                <StyledRow>
                                                    <StyledCol lg={3} xl>
                                                    <Row >
                                                        
                                                            <StyledLogo>
                                                                <Logo />
                                                            </StyledLogo>
                                                        
                                                    </Row>
                                                    </StyledCol>
                                                    <Col lg={5} xl={4}>
                                                        <Row>
                                                            <StyledNavCol>
                                                                
                                                                <StyledDropdown>
                                                                    <DropdownMenu name="Product" />
                                                                    <DropdownMenu name="Resources" />
                                                                    <DropdownMenu name="Company" />
                                                                </StyledDropdown>
                                                                
                                                            </StyledNavCol>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={4} xl style={{paddingLeft: "3em"}}>
                                                        
                                                            
                                                            <ContactForm />
                                                            <StyledStartedButton background="#FF6938" font="#FFFFFF" weight="200">Get Started</StyledStartedButton>
                                                            
                                                        
                                                    </Col>
                                                </StyledRow>  
                                            </Nav></DesktopDisplayer>
                                </>
                            
                
  
        
        
        </StickyInner>
    )
}




export default Navigation
