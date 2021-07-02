import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"

const Container = styled.div`
    height: 10.5625rem;
 
    background: #FCF5F0;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledTitle = styled.div`
    /* Short headline */
    
    height: 3rem;
    color: #073233;
    margin-bottom: 3.8125rem;
    margin-top: 3.75rem;
    margin-left: 10.3125rem;

    > h1 {
        
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 1.2em;
        text-align: center;
        letter-spacing: -0.0125em;
    }
`

const StyledButton = styled(Button)`
    border: 2px solid #FF6938;
    border-radius: 40px;
  
    margin-left: 61.625rem;
    margin-top: 3.8125rem;
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
    margin-left: 71.375rem;
    margin-top: 3.875rem;
    padding: 0.6687em 1.525em 0.6687em 1.525em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
        
    }
`

const StyledRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
    display: flex;
`

export const Join = () => {
    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            <StyledRow>
                <StyledTitle>
                    <h1>
                    Want to join us?
                    </h1>
                </StyledTitle>
                
                <StyledButton background="#FCF5F0" font="#FF6938" weight="400">Try demo</StyledButton>
                    <StyledSecondButton background="#FF6938" font="#FFFFFF">Careers</StyledSecondButton>
              
                    
                
            </StyledRow>
        </Container>
        </div>
    )
}
