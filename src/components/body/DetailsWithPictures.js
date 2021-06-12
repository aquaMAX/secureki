import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import pierwszy from "../../assets/pierwszy.png"

const Container = styled.div`
    height: 40em;
    width: 100vw;
    background: #FFFFFF;
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
`

const ImageContainer = styled(Col)`
    padding-top: 3.5em;
`
const StyledRow = styled(Row)`
    padding-left: 13.5625em;
    padding-right: 4.25em;
    margin-right: 0;
    margin-left: 0;
`

const StyledTitle = styled.div`

    height: 3.6em;
    width: 12.075em;

    margin-top: 0.5em;
    margin-bottom: 0.85em;

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

export const DetailsWithPictures = () => {
    return (
        <>
        <Container>
            <StyledRow>
                <TextContainer>
                    <StyledTitle>
                    Trusted by leading companies
                    </StyledTitle>
                    <StyledContent>
                        <Row>
                    Compromised access and credentials most often are the leading attack vectors of a security breach.
                    </Row><Row><span><br />
                    Placeholder  
                    </span></Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>
                <ImageContainer>
                    <img src={pierwszy} />
                </ImageContainer>

            </StyledRow>
        </Container>
        </>
    )
}
