import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import pierwszy from "../../assets/pierwszy.png"

const Container = styled.div`
    height: 40em;
    
    background: #FCF5F0;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
   
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    padding-left: 0;
    padding-right: 0;
    margin-right: 0;
    
`

const ImageContainer = styled(Col)`
    padding-top: 3.5em;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
`
const StyledRow = styled(Row)`
    padding-left: 10.3125em;
    padding-right: 4.25em;
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

    height: 3.6em;
    

    margin-top: 0.5em;
    margin-bottom: 0.85em;
    
    margin-right: 0;

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
    margin-right: 7.8125em;
    color: #17494D;
`

const StyledMoreabout = styled.button`
   
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
    border: 0;
    background: none;
    padding: 0;
    > text {
        text-underline-offset: 2.5px;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 3px;
        transition: 0.3s;
        &:hover {
            padding-right: 1em;
        }   

    }  
`

const StyledPointer = styled.div`
    margin-left: 0.7em;
    margin-bottom: 0.18em;
    font-size: 1.1em;
    line-height: 1.5em;
    letter-spacing: 0.00625em;
    color: #FF6938;
`

const Styledimg = styled.img`
    min-width: 39.8125em;
    margin-bottom: 0;
`

export const DetailedOffer = () => {
    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            
            <StyledRow>
                <TextContainer>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                        Eliminate the main cause of a breach. Authenticate with ease.
                    </StyledTitle>
                    <StyledContent>
                        When it comes to protecting your data, passwords are the weakest link. That is why multifactor authentication has become the identity and access management standard for preventing unauthorized access. Verify the identity of all users with SecureKi.   
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>
                <ImageContainer>
                    <Styledimg src={pierwszy} />
                </ImageContainer>

            </StyledRow>
            
        </Container>
        </div>
    )
}