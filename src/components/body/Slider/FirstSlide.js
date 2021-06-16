import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import drugi from "../../../assets/anna.png"
import group from "../../../assets/elementsgroup.svg"
import squareslide from "../../../assets/decorations/squareslide.svg"
import circleslide from "../../../assets/decorations/circleslide.svg"

const Container = styled.div`
    height: 32.5em;
   
    max-width: 90em;
    background: #114748;
    padding-bottom: 7.125em;
    margin: auto;
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 10.6875em;
    margin-left: 0;
`

const ImageContainer = styled(Col)`
    padding-top: 7.1875em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`
const StyledRow = styled(Row)`
    padding-left: 10.375em;
    margin-right: 0;
    margin-left: 0;
`

const StyledSlogan = styled.div`
    /* Name Surname Lead ma */


    font-family: Messina Sans;
    font-style: normal;
    font-weight: 200;
    font-size: 0.75em;
    line-height: 2em;
    /* or 200% */
    letter-spacing: 0.050333333333333333em;
    color: #BDCCC7;

`

const StyledTitle = styled.div`

/* “All base UI element */

    position: absolute;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: semibold;
    font-size: 1.5em;
    line-height: 1.3333333333333333em;
    padding-right: 8.416666666666666em;
    /* or 133% */

    color: #FFFFFF;
    margin-top: 0.5em;
    margin-bottom: 0.35em;
    letter-spacing: 0.01625em;

    /* “All base UI element */
`

const StyledMoreabout = styled.button`
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 200;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    display: flex;
    align-items: center;
    letter-spacing: 0.05625em;
    margin-top: 7.475em;

    /* Link */
    color: #FFFFFF;
    margin-right: 0;
    border: 0;
    background: none;
    padding: 0;
    
    > text {
        text-underline-offset: 4px;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 3px;
        transition: 0.3s;
        &:hover {
            padding-right: 1em;
        }   
    }  
`

const StyledPointer = styled.div`
    margin-left: 0.5em;
    margin-bottom: 0.3em;
    font-size: 1.1em;
    font-weight: bold;
    line-height: 1.5em;
    letter-spacing: 0.00625em;
    color: #FFFFFF;
`


const Styledimg = styled.img`
    min-width: 30.125em;
    z-index: 2;
    position: absolute;
`

const StyledGroupElements = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 35.375em;
    margin-top: 2.75em;
`

const StyledSquare = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 8.3125em;
    margin-top: 21.9375em;
`

const StyledCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 11.96875em;
    margin-top: 25.6875em;
`



export const FirstSlide = () => {
    return (
        <>
        <Container>
            <StyledSquare src={squareslide} />
            <StyledCircle src={circleslide} />
            <StyledGroupElements src={group} />
            <StyledRow>
                <ImageContainer>
                    <Styledimg src={drugi} />
                </ImageContainer>
                <TextContainer>
                    <StyledSlogan>
                    ARIANNE KOWALSKI, LEAD MARKETING SPECIALIST, MAILCHIP
                    </StyledSlogan>
                    <StyledTitle>
                    “All base UI elements are made using Nested Symbols and shared styles that are logically connected.”
                    </StyledTitle>
                    <StyledMoreabout>
                        <text>Read full case study</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </>
    )
}

