import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import drugi from "../../assets/drugi.png"

const Container = styled.div`
    height: 45.5em;
    width: 100vw;
    background: #FCF5F0;
    padding-bottom: 7.125em;
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 5.3125em;
    margin-left: 7.4375em;
`

const ImageContainer = styled(Col)`
    padding-top: 2.5em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`
const StyledRow = styled(Row)`
    padding-left: 3.875em;
    margin-right: 0;
    margin-left: 0;
`

const StyledSlogan = styled.div`
    width: 3.6666666666666665em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;

    padding-left: 0.75em;
    padding-right: 0.75em;
    
    font-size: 0.75em;
    line-height: 2em;
    /* or 200% */
    text-align: center;
    display: flex;
    align-items: center;
    letter-spacing: 0.041666666666666664em;

    color: #FFFFFF;

    background: #FF6938;
    border-radius: 2.5em;
`

const StyledTitle = styled.div`

    height: 5.525em;
    width: 12.075em;
    padding-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.35em;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 1.2em;
    /* or 120% */
    letter-spacing: -0.00625em;

    color: #073233;
`

const StyledContent = styled.div`
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    letter-spacing: 0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    padding-right: 9.75em;
    padding-left: 0.9375em; 
`

const StyledMoreabout = styled.div`
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    display: flex;
    align-items: center;
    letter-spacing: 0.00625em;
    
    color: #073233;
    > text {
        border-bottom: 3px solid #FF6938;
    }  
`

const StyledPointer = styled.div`
    margin-left: 0.5em;
    margin-bottom: 0.3em;
    font-size: 1em;
    line-height: 1.5em;
    letter-spacing: 0.00625em;
    color: #FF6938;
`

const SecondParagraph = styled(Row)`

`

const Styledimg = styled.img`
    min-width: 41.125em;
`

export const SecondDetailedOffer = () => {
    return (
        <>
        <Container>
            <StyledRow>
                <ImageContainer>
                    <Styledimg src={drugi} />
                </ImageContainer>
                <TextContainer>
                    <StyledSlogan>
                        PAM
                    </StyledSlogan>
                    <StyledTitle>
                        Keep unauthorized users out. Safeguard privileged access and credentials.
                    </StyledTitle>
                    <StyledContent>
                        <Row>
                        Compromised access and credentials most often are the leading attack vectors of a security breach.
                        </Row><Row><span><br />
                        Our comprehensive privileged access management is designed to manage and monitor privileged access to accounts and applications, alert system administrators on high-risk events, reduce operations complexity, and meeting regulatory compliance with ease.  
                        </span></Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn more on Privileged Access Management</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </>
    )
}