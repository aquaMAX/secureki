import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import SecurekiLogo from "../../assets/SECUREKi Logo.svg"
import SecurekiAnimated from "../../assets/SECUREKI_LOGO_ANIMATION.mp4"
import burger from "../../assets/burger.svg"
import MobileMenu from './MobileMenu'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'gatsby'

const Container = styled.div`
    height: 4rem;
    max-width: 100%;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 20px rgba(7, 50, 51, 0.04);
    @media (min-width: 994px) {
        display: none;
    }
`

const StyledLogo = styled.video`
    height: 3.05rem;
    width: 10.625rem;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: .375rem;
    position: absolute;
    margin-left: 1.625rem;
`;

const StyledBurger = styled.svg`
    margin-top: 1.625rem;
    margin-right: 1.625rem;
    transition: 3s;
 
`;

const StyledRow = styled(Row)`
    margin: 0;
    padding: 0;
`

const StyledCol = styled(Col)`
    padding: 0;
    margin: 0;
`

const StyledBurgerCol = styled(Col)`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
`

const AnimatedMobileMenu = styled(MobileMenu)`
    height: ${props=> props.status === false ? 0 : "10rem"};


`

const Mobile = () => {
    const [ show, isShow ] = useState(false); 
    
    return (
        <>
        <Container>
            <StyledRow>
                <StyledCol>
                    <a href="http://secureki.maverickstudio.pl/">
                        <StyledLogo autoPlay muted playsInline>
                            <source src={SecurekiAnimated} type="video/mp4" />
                        </StyledLogo>
                    </a>
                </StyledCol>
                <StyledBurgerCol>
                    <div onClick={()=>{show === false ? isShow(true) : isShow(false)}}>
                        {show === false ? 
                        <StyledBurger width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Burger">
                            <line id="Line 3" y1="1.5" x2="21" y2="1.5" stroke="#073233" stroke-width="3"/>
                            <line id="Line 4" y1="7.5" x2="21" y2="7.5" stroke="#073233" stroke-width="3"/>
                            <line id="Line 5" y1="13.5" x2="21" y2="13.5" stroke="#073233" stroke-width="3"/>
                        </g>
                        </StyledBurger>
                        :
                        <StyledBurger width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Cross">
                                <line id="Line 6" x1="1.93934" y1="16.7885" x2="16.7886" y2="1.93922" stroke="#073233" stroke-width="3"/>
                                <line id="Line 7" x1="2.06066" y1="1.93934" x2="16.9099" y2="16.7886" stroke="#073233" stroke-width="3"/>
                            </g>
                        </StyledBurger>
                        }
                    </div>
                </StyledBurgerCol>
            </StyledRow>
            
        </Container>
 
            
        <AnimatedMobileMenu status={show}/>  
        </>
    )
}

export default Mobile
