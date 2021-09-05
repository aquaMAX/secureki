import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import drugi from "../../assets/PAM/offer-1.png"
import Media from 'react-media'

const Container = styled.div`
    height: 45.5em;
    
    background: #FCF5F0;
    padding-bottom: 7.125em;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 52.8125rem;
    } 
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 11.0625rem;
    margin-left: 3.6875em;
    @media (max-width: 991px) {
        margin-top: 3.0625rem;
        margin-left: 1.125rem;
        padding-left: 0;
        padding-top: 0;
    }
`

const ImageContainer = styled(Col)`
    padding-top: 3.1875em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`
const StyledRow = styled(Row)`
    padding-left: 1.5em;
    margin-right: 0;
    margin-left: 0;
    @media (max-width: 991px) {
        padding-left: 0;
    }
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
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
    @media (max-width: 991px) {
        
        
    }
`

const StyledTitle = styled.div`

    
    width: 12.075em;
    padding-right: 1em;
    margin-top: 0.625rem;
    margin-bottom: 2.125rem;

    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 1.2em;
    /* or 120% */
    letter-spacing: -0.00625em;

    color: #073233;
    @media (max-width: 991px) {
        font-size: 1.875rem;
        padding-right: 0;
        width: auto;
        margin-bottom: 1.5625rem;
    }
`

const StyledContent = styled.div`
    width: 27.8125em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    letter-spacing: 0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    @media (max-width: 991px) {
        
        width: auto;
    }
     
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

const Wrapper = styled.div`
@media (max-width: 991px) {
    max-width: 22.1375rem;
    overflow: hidden;
}
`

const Styledimg = styled.img`
    min-width: 46.6875em;
    @media (max-width: 991px) {
        min-width: 29.8125rem;
        margin-left: -4.9375rem;
        margin-top: -5.1rem;
    } 
`

export const Offer = () => {
    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            <StyledRow>
                <ImageContainer xs={{ order: 2 }} lg={{ order: 1 }}>
                    <Wrapper><Styledimg src={drugi} /></Wrapper>
                </ImageContainer>
                <TextContainer>
                    <StyledSlogan>
                        PAM
                    </StyledSlogan>
                    <StyledTitle>
                    Comprehensive for the Modern Workforce
                    </StyledTitle>
                    <StyledContent>
                        Credential management alone isn’t sufficient when it comes to protecting your privileged access. Our SecureKi’s Privileged Access Management solutions come equipped with session recording, fine-grained access control, multifactor authentication, single sign-on, and policy defining capabilities — all the essential needs when it comes to securing your credentials. 
                    </StyledContent>
                    <StyledMoreabout>
                    <Media queries={{
                            small: "(max-width: 991px)",
                            large: "(min-width: 961px)"
                        }}>
                            {matches => (
                                <>
                                {matches.small && <><text>Learn more on PAM</text><StyledPointer>   →</StyledPointer></> }
                                {matches.large && <><text>Learn more on Privileged Access Management</text><StyledPointer>   →</StyledPointer></> }
                                </>
                            )}
                        </Media>
                        
                    </StyledMoreabout>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </div>
    )
}