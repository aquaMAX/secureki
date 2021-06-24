import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import drugi from "../../assets/MFA/offer-1.png"
import chart from "../../assets/MFA/chart.svg"

const Container = styled.div`
    height: 48.6875em;
    
    background: #FCF5F0;
    padding-bottom: 7.125em;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 7.625em;
    margin-left: 3.125em;
`

const ImageContainer = styled(Col)`
    padding-top: 6.3125em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`
const StyledRow = styled(Row)`
    padding-left: 5.625em;
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

    width: 12.075em;
    padding-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.825em;

    font-family: Messina Sans bold;
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

const StyledMoreabout = styled.button`
    font-family: Messina Sans semibold;
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

const SecondParagraph = styled(Row)`

`

const Styledimg = styled.img`
    min-width: 41.125em;
`

const NoMarginRow = styled(Row)`
    margin: 0;
`

const StyledChart = styled.img`
    z-index: 2;
    position: absolute;
    margin-top: 3.0625em;
`

const StyledChartText = styled.div`
    z-index: 1;
    position: absolute;

    

    align-content: nowrap;
    margin-top: 2.4571428571428573em;
    margin-left: 0.8285714285714286em;

    font-family: Messina Sans;
    font-size: 2.1875em;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0285714285714285em;
    letter-spacing: 0.0028571428997176034em;
    text-align: left;


`
const StyledPercentage = styled.div`
    margin-left: 5.916666666666667em;
    margin-top: 7.8em;
    font-family: Messina Sans;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 700;
    line-height: 3em;
    letter-spacing: 0.008333333457509676em;
    text-align: left;
`

const ChartTitle = styled.div`
    font-family: Messina Sans bold;
    margin-bottom: 0.47750000000000004em;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 700;
    line-height: 2.3333333333333335em;
    letter-spacing: 0;
    text-align: left;

`

const ChartBody = styled.div`
    width: 12.038461538461538em;
    font-family: Messina Sans semibold;
    margin-bottom: 0.2692307692307692em;
    font-size: 1.625em;
    font-style: normal;
    font-weight: 600;
    line-height: 1.1153846153846154em;
    letter-spacing: 0.0038461539034660044em;
    text-align: left;
    color: #FF6938;
`

const ChartFooter = styled.div`
    font-family: Messina Sans;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 400;
    line-height: 3.3333333333333335em;
    letter-spacing: 0.008333333457509676em;
    text-align: left;
    color: #17494D80;

`

const ChartText = styled.div`
    margin-top: 2.6225em;
    margin-left: 8em;
    position: absolute;
`

export const ChartOffer = () => {
    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            <StyledRow>
                <ImageContainer>
                    <Styledimg src={drugi} />
                </ImageContainer>
                <TextContainer>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                    Simple, Effective Multifactor Authentication
                    </StyledTitle>
                    <StyledContent>
                        <Row>
                        Multifactor authentication from SecureKi protects your applications by using a second source of validation, like a phone or token, to verify user identity before granting access. Combining Biometric Authentication as an added layer of authentication ensures additional security yet providing a streamlined login experience.
                        </Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    <NoMarginRow>
                        
                            <NoMarginRow>
                                <StyledChart src={chart}/>
                                <StyledChartText>86</StyledChartText>
                                <StyledPercentage>%</StyledPercentage>
                            </NoMarginRow>
                        
                            <ChartText>
                            <ChartTitle>
                            DID YOU KNOW?
                            </ChartTitle>
                            <ChartBody>
                            86% of security breaches involve compromised passwords.
                            </ChartBody>
                            <ChartFooter>
                            2020 Verizon Data Breach Investigations Report
                            </ChartFooter>
                            </ChartText>
                        
                    </NoMarginRow>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </div>
    )
}