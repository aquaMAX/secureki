import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import Information from './Information'
import Logo from './Logo'

import { Container, Row, Col } from 'react-bootstrap';
import DropdownMenu from './Dropdown';

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
            <Row>
                <Col>
                <Row>
                    <Col></Col>
                    <Col>
                        <Logo />
                    </Col>
                </Row>
                </Col>
                <Col>
                    <Row>
                        <Col><DropdownMenu name="Product" /></Col>
                        <Col><DropdownMenu name="Resources" /></Col>
                        <Col><DropdownMenu name="Company" /></Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col><Button background="#F9F1EE" font="#FF6938">Contact Us</Button></Col>
                        <Col><Button background="#FF6938" font="#FFFFFF">Get Started</Button></Col>
                    </Row>
                </Col>
            </Row>  
        </Nav>
        </>
    )
}




export default Navigation
