import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"

const Container = styled.div`
    height: 22.875em;
    width: 100vw;
    background: #FCF5F0;
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 2em;
    margin-top: 6.75em;

    > h1 {
        position: absolute;
        width: 100vw;
        font-family: Messina Sans;
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
    border-radius: 30px;
    position: absolute;
    margin-left: 9em;
    padding: 0.2687em 1.125em 0.2687em 1.125em;
    font-size: 1.125em;
`

const StyledSecondButton = styled(Button)`
    position: absolute;
    margin-right: 9em;
    padding: 0.3798111111111111em 1.2361111111111112em 0.3798111111111111em 1.2361111111111112em;
    font-size: 1.125em;
`

const StyledCol = styled(Col)`
    justify-content: center;
    display: flex;
`

const StyledRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
`

export const GetStarted = () => {
    return (
        <Container>
            <StyledRow>
                <StyledTitle>
                    <h1>
                    Ready to get started?
                    </h1>
                </StyledTitle>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <StyledSecondButton background="#FF6938" font="#FFFFFF">Get in touch</StyledSecondButton>
              
                    <StyledButton background="#FCF5F0" font="#FF6938">Free demo</StyledButton>
                </StyledCol>
            </StyledRow>
        </Container>
    )
}
