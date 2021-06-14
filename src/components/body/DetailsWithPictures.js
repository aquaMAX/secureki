import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import pierwszy from "../../assets/pierwszy.png"
import paypal from "../../assets/paypal.svg"
import pay from "../../assets/pay.svg"
import mailchimp from "../../assets/mailchimp.svg"

const Container = styled.div`
    height: 40em;
    width: 100vw;
    background: #FFFFFF;

    max-width: 1440px;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    padding-left: 0;
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

    height: 3.125em;
    width: 7.770833333333333em;
    

    margin-top: 0.5em;
    margin-bottom: 0.6875em;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
    line-height: 1.0625em;
    /* or 120% */
    letter-spacing: -0.010416666666666666em;

    color: #073233;
`

const StyledContent = styled(Row)`
    
    width: 21.333333333333332em;
    height: 3.2222222222222223em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 150% */
    letter-spacing: 0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    padding-left: 0.9375em;
`

const StyledMoreabout = styled.button`
    width: 12.825em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5em;
    padding-left: 0.9375em;
    /* or 150% */
    display: flex;
    align-items: center;
    letter-spacing: 0.00625em;

    margin-top: 7.625em;
    
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

const LogosRow = styled(Row)`
    width: 25em;
    height: 2.9375em;
    padding-left: 0.9375em;
`

const PaypalLogo = styled.img`
    min-width: 5.726875em;
    width: 5.726875em;
    padding-top: 0.7415625em;
`

const PayLogo = styled.img`
    min-width: 2.73125em;
    width: 2.73125em;
`

const MailchimpLogo = styled.img`
    min-width: 10.25em;
    width: 10.25em;
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
                        <Row style={{paddingLeft: "0.8333333333333334em"}}>
                        Discover from our customers how SecureKi improves their security and business.
                    </Row><Row><span><br />
                        <LogosRow>
                            <Col>
                                <PaypalLogo src={paypal} />
                            </Col>
                            <Col>
                                <PayLogo src={pay} />
                            </Col>
                            <Col>
                                
                                <MailchimpLogo src={mailchimp} />
                                
                            </Col>
                        </LogosRow>
                    </span></Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>See customer stories</text>
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
