import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import pierwszy from "../../assets/pierwszy.png"
import TIME from "../../assets/TIME.png"
import Magnum from "../../assets/Magnum.png"
import Hap from "../../assets/Hap.png"
import { StackedPictures } from './StackedPictures';
import Total from "../../assets/stacked images/Total.png"
import Media from 'react-media'





const Container = styled.div`
    height: 45.875em;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 47.875rem;
        padding-bottom: 0;
    } 
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    padding-left: 0;
    padding-right: 0;
    @media (max-width: 991px) {
        padding-top: 0;
    } 
`

const ImageContainer = styled(Col)`
    padding: 0;
`
const StyledRow = styled(Row)`
    padding-left: 13.5625em;
    padding-right: 4.25em;
    margin-right: 0;
    margin-left: 0;
    @media (max-width: 1439px) {
        padding-left: 3.125rem;
    }
    @media (max-width: 991px) {
        padding-left: 1.1875rem;
    } 
`

const StyledTitle = styled.div`

    
    width: 7.770833333333333em;
    margin-top: 0.5em;
    margin-bottom: 2.625rem;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
    line-height: 1.0625em;
    /* or 120% */
    //letter-spacing:  -0.010416666666666666em;

    color: #073233;

    @media (max-width: 991px) {
        width: 18.3125rem;
        font-size: 1.875rem;

        font-weight: 700;
        line-height: 2.4375rem;
        //letter-spacing:  0rem;
        text-align: left;
        margin-bottom: 1.5625rem;
        margin-top: 3.0625rem;
    } 
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
    //letter-spacing:  0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    padding-left: 0.9375em;

    @media (max-width: 991px) {
        width: 20.125rem;
    } 
`

const StyledMoreabout = styled.div`
    
    font-family: Messina Sans semibold;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5em;
    padding-left: 0.9375em;
    /* or 150% */
    display: flex;
    align-items: center;
    //letter-spacing:  0.00625em;

    margin-top: 7.625em;
    
    color: #073233;
    border: 0;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
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
    //letter-spacing:  0.00625em;
    color: #FF6938;
`

const LogosRow = styled(Row)`
    width: 29.375rem;
    height: 2.5625rem;
    padding-left: 0.9375em;
    display: flex;
    align-items: center;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
    }
    @media (max-width: 991px) {
        width: 23.0375rem;
        padding-left: 0.925rem;
        margin: 0;
    }
`

const HapLogo = styled.img`
    min-width: 9.9375rem;
    width: 9.9375rem;
    padding: 0;
    display: flex;
    align-items: center;
    margin: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        min-width: 8.9375rem;
        width: 8.9375rem;
    }
    @media (max-width: 991px) {
       width: auto;
       min-width: auto;
       
    } 
`

const MagnumLogo = styled.img`
    min-width: 4.75rem;
    width: 4.75rem;
    padding: 0;
    display: flex;
    align-items: center;
    margin: 0;

    @media (max-width: 991px) {
        width: auto;
       min-width: auto;
       margin-left: 0.725rem;
        
    } 
`

const TimeLogo = styled.img`
    min-width: 7.4375rem;
    width: 7.4375rem;
    padding: 0;
    margin: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        min-width: 5.4375rem;
        width: 5.4375rem;
    }
    @media (max-width: 991px) {
        width: auto;
       min-width: auto;
       margin-left: -1.25rem;
       
    } 
`

const StyledCol = styled(Col)`

    @media (max-width: 991px) {
        padding: 0
    } 
`

const StyledImage = styled.img`
    
    margin-top: 1.5625rem;
    max-width: 21.25rem;
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileDisplayer = styled.div`
    @media (min-width: 992px) {
        display: none;
    }
`

const DesktopDisplayer = styled.div`
    @media (max-width: 991px) {
        display: none;
    }
`

export const DetailsWithPictures = () => {
    return (
        <>
        <Container>
            <StyledRow xs={1} lg={2}>
                <TextContainer xl={5} lg={5}>
                    <StyledTitle>
                    Trusted by leading companies
                    </StyledTitle>
                    <StyledContent>
                        <Row style={{paddingLeft: "0.8333333333333334em"}}>
                        Discover from our customers how SecureKi improves their security and business.
                    </Row><Row><span><br />
                        <LogosRow>
                            <StyledCol>
                                <HapLogo src={Hap} />
                            </StyledCol>
                            <StyledCol>
                                <MagnumLogo src={Magnum} />
                            </StyledCol>
                            <StyledCol>
                                <TimeLogo src={TIME} />
                            </StyledCol>
                        </LogosRow>
                    </span></Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>See customer stories</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>
                <ImageContainer>
                
                <>
                        <DesktopDisplayer>
                            <StackedPictures />
                        </DesktopDisplayer>
                        <MobileDisplayer>
                            
                            <StyledImage src={Total} />
                            
                        </MobileDisplayer> 
                    </>
                    
                </ImageContainer>
            </StyledRow>
        </Container>
        </>
    )
}
