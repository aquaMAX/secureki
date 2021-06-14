import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button';
import Information from './Information'
import Logo from './Logo'

import { Row, Col } from 'react-bootstrap';
import DropdownMenu from './Dropdown';

const Nav = styled.nav`
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(7, 50, 51, 0.04);
    height: 77px;

`;

const Triangle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 38px;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4.5px solid #FF6938;
`

const StyledLogo = styled(Col)`
    
`

const StyledDropdown = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 0.3s;
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
`

const StyledContactButton = styled(Button)`
    transition: 0.3s;
    &:hover {
        background: #EEDDD7;
    }
`

const StyledStartedButton = styled(Button)`
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
    }
`

const Navigation = () => {
    return (
        <StickyInner className="sticky-inner">
        <Information/>
        <Nav>
            <StyledRow>
                <StyledCol>
                <Row >
                    
                        <StyledLogo>
                            <Logo />
                        </StyledLogo>
                    
                </Row>
                </StyledCol>
                <Col xs={4}>
                    <Row>
                        <Col>
                            
                            <StyledDropdown>
                                <DropdownMenu name="Product" />
                                <DropdownMenu name="Resources" />
                                <DropdownMenu name="Company" />
                            </StyledDropdown>
                            
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col></Col>
                        <Col><StyledContactButton background="#F9F1EE" font="#FF6938" weight="400">Contact Us</StyledContactButton></Col>
                        <Col><StyledStartedButton background="#FF6938" font="#FFFFFF" weight="200">Get Started</StyledStartedButton></Col>
                        <Col></Col>
                    </Row>
                </Col>
            </StyledRow>  
        </Nav>
        
        
        </StickyInner>
    )
}




export default Navigation
