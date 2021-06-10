import React from 'react'
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

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
`

const StyledDropdown = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const StyledRow = styled(Row)`
    margin-left: 0px;
    margin-right: 0px;
`


const Navigation = () => {
    return (
        <>
        <Information/>
        <Nav>
            <StyledRow>
                <Col>
                <Row style={{marginRight:30, marginLeft:0,}}>
                    
                    
                    <Col>
                    <StyledLogo>
                        <Logo />
                        </StyledLogo>
                    </Col>
                    
                </Row>
                </Col>
                <Col xs={3}>
                    <Row>
                        <Col>
                            
                            <StyledDropdown>
                                <DropdownMenu name="Product" /><Triangle />
                                <DropdownMenu name="Resources" /><Triangle />
                                <DropdownMenu name="Company" /><Triangle />
                            </StyledDropdown>
                            
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col></Col>
                        <Col><Button background="#F9F1EE" font="#FF6938">Contact Us</Button></Col>
                        <Col><Button background="#FF6938" font="#FFFFFF">Get Started</Button></Col>
                        <Col></Col>
                    </Row>
                </Col>
            </StyledRow>  
        </Nav>
        </>
    )
}




export default Navigation
