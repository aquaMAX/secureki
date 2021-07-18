import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import SecurekiLogo from "../../assets/SECUREKi Logo.svg"
import burger from "../../assets/burger.svg"

const Container = styled.div`
    height: 4rem;
    max-width: 23.4375rem;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledLogo = styled.img`
    height: 1.25rem;
    width: 8.625rem;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 1.375rem;
    position: absolute;
    margin-left: 1.125rem;
`;

const StyledBurger = styled.img`
    margin-top: 1.625rem;
    margin-right: 1.625rem;
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

const Mobile = () => {
    return (
        <Container>
            <StyledRow>
                <StyledCol>
                    <StyledLogo src={SecurekiLogo} />
                </StyledCol>
                <StyledBurgerCol>
                    <StyledBurger src={burger} />
                </StyledBurgerCol>
            </StyledRow>
        </Container>
    )
}

export default Mobile
