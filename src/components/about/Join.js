import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"

const Container = styled.div`
    height: 22.875em;
 
    background: #FCF5F0;
`

const StyledTitle = styled(Col)`
    /* Short headline */
    
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 2em;
    margin-top: 6.75em;

    > h1 {
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        letter-spacing: -0.0125em;
    }
`

const StyledButton = styled(Button)`
    border: 2px solid #FF6938;
    border-radius: 40px;
    position: absolute;
    margin-left: 9em;
    padding: 0.5687em 1.425em 0.5687em 1.425em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
        color: #FFFFFF;
        border-color: #E55A2D;
    }
`

const StyledSecondButton = styled(Button)`
    position: absolute;
    margin-right: 9.5em;
    padding: 0.6687em 1.525em 0.6687em 1.525em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
        
    }
`

const StyledCol = styled(Col)`
    justify-content: center;
    display: flex;
`

const StyledRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
`

export const Join = () => {
    return (
        <Container>
            <StyledRow>
                <StyledTitle>
                    <h1>
                    About us
                    </h1>
                </StyledTitle>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <StyledSecondButton background="#FF6938" font="#FFFFFF">Get in touch</StyledSecondButton>
              
                    <StyledButton background="#FCF5F0" font="#FF6938" weight="400">Free demo</StyledButton>
                </StyledCol>
            </StyledRow>
        </Container>
    )
}
