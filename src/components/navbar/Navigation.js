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
                <Col xs={3}>
                    <Row>
                        <Col><Row><DropdownMenu name="Product" /><Triangle /></Row></Col>
                        <Col><Row><DropdownMenu name="Resources" /><Triangle /></Row></Col>
                        <Col><Row><DropdownMenu name="Company" /><Triangle /></Row></Col>
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
            </Row>  
        </Nav>
        </>
    )
}




export default Navigation
