import * as React from "react";
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Header from '../../assets/PAM/header.png'
import StyledButton from '../navbar/Button.js'
import checkpoint from '../../assets/MFA/checkpoint.svg'

import image from '../../assets/about/header/image.png'
import elementsgroup from '../../assets/about/header/elementsgroup.svg'
import rec from '../../assets/about/header/rec.svg'

const Layout = styled.div`
    max-width: 90em;
    height: ${45.625 + 7.6875}em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    
`

const Container = styled.div`
     padding-top: 12.84375em;
`

const MFAButton = styled(StyledButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1.75rem;;
    padding-right: 1.75rem;;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    background: #FF6938;
    border-radius: 1.875em;
    margin: 0;
    font-family: Messina Sans semibold;
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.0063rem;
    transition: 0.3s;
    
    &:hover {
        background: #E55A2D;
        
    }
`

const StyledTitle = styled(Row)`
    /* Short headline */
    
    height: 4.5rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    > h1 {
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 3.5em;
        line-height: 0.8571428571428571em;
        text-align: center;
        letter-spacing: -0.008928571428571428em;
    }
`

const StyledRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
`

const StyledContent = styled(Row)`
    width: 49.25rem;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 1.5rem;
    margin-left: 20.375rem;
    /* or 156% */

    text-align: center;
    display: block;

    color: #17494D;
`

const ButtonContainer = styled.div`
    margin-top: 2.125rem;
    margin-left: 40.2813rem;
`

const StyledImage = styled.img`
    position: absolute;
    z-index: 2;
    width: 69.125rem;
    margin-top: 8.1563rem;
    margin-left: 10.4375rem;
`

const StyledElements = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 28.9063rem;
    margin-left: 73.5625rem;
`

const StyledRec = styled.img`
    position: absolute;
    z-index: 1; 
    margin-top: 4.0938rem;
    margin-left: 5.75rem;
`



export const AboutHeader = () => {
return (
    <>
    <div style={{backgroundColor: "#FCF5F0"}}>
    <Layout>
                <Container>
                    <StyledTitle>
                        <h1>
                        About us
                        </h1>
                    </StyledTitle>
                    <StyledContent>
                        Founded in 2013 by Brandon Low and Hak Jae Bang, SecureKi specializes in helping our customers secure and manage their credentials with industry-leading identity security technologies and solutions. With offices in Malaysia, South Korea, and Taiwan, we are dedicated to <b>our mission to empower organizations to securely, efficiently, and effortlessly protect their digital identities for a better tomorrow.</b>
                    </StyledContent>
                <ButtonContainer>
                    <MFAButton background={"#FF6938"} font={"#FFFFFF"}>
                        Say hello
                    </MFAButton>
                </ButtonContainer>
                
                </Container>
                <StyledImage src={image} />  
                <StyledElements src={elementsgroup} /> 
                <StyledRec src={rec} />
                
    </Layout>
    
    </div>
    
    
    </>
    

)};