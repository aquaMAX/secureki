import * as React from "react";
import styled, { keyframes } from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import StyledButton from '../navbar/Button.js'



import { StaticImage } from 'gatsby-plugin-image'

const Layout = styled.div`
    max-width: 90em;
    height: 38.875rem;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 34.875rem;
    } 
    
`

const Container = styled.div`
     padding-top: 15.3125rem;
     @media (max-width: 991px) {
        padding-top: 4.0625rem;
    }
`

const MFAButton = styled(StyledButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    padding-left: 1.625rem;
    padding-right: 1.625rem;
    
    background: #FF6938;
    border-radius: 1.875rem;
    border-radius: 1.875rem;
    -moz-border-radius: 1.875rem;
    -webkit-border-radius: 1.875rem;
    
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
    
    height: 3rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    > h1 {
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        text-align: center;
        letter-spacing: -0.0313rem;
        margin: 0;
        @media (max-width: 991px) {
            font-size: 1.875rem;
        }
    }
`

const StyledContent = styled(Row)`
    width: 39.75rem;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 1.5rem;
    margin-left: 25.125rem;
    /* or 156% */

    text-align: center;
    display: block;

    color: #17494D;
    @media (max-width: 991px) {
        margin-left: 1.125rem;
        margin-right: 1.125rem;
        width: auto; 
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

const ButtonContainer = styled.div`
    margin-top: 2.525rem;
    margin-left: 37.5rem;
    @media (max-width: 991px) {
        margin-left: 4.1875rem;
        margin-top: 2.7rem;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: auto;
        display: flex;
        justify-content: center;
        text-align: center;
    }
`
const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(-60.25rem)}
  `

const CustomersRow = styled(Row)`
    max-width: 56.25rem;
    overflow: hidden;
    margin: 0;
    margin-top: 2.5rem;
    
    
    display: flex;
    flex-wrap: nowrap;
    margin-left: 16.9375rem;
    
    white-space: nowrap;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        margin-right: 0;
        margin-left: 0;
        margin-top: 2.0625rem;
        padding-right: 1.5em;
        padding-left: 1em;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 5rem;
        
        max-width: 52rem;
    }
`



const StyledCol = styled(Col)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledKwap = styled(Col)`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 991px) {
        display: none;
        
    }
`

const SlideTrack = styled(Row)`
    	animation: ${scroll} 40s linear infinite;
		display: flex;
		min-width: 120.5rem;
        @media (max-width: 991px) {
            animation: ${scroll} 20s linear infinite;
        
        
    }
`



export const Customers = () => {
return (
    <>
    <Layout>
        <Container>
            <StyledTitle>
                <h1>
                Our customers
                </h1>
            </StyledTitle>
            <StyledContent>
                The best way to get to know us is through the experience of our valued customers. Discover from our customers how SecureKi improves their security and business.                    
            </StyledContent>
            <CustomersRow xs={3} lg={6}>
                <SlideTrack>
            <StyledCol>
                <StaticImage src="../../assets/about/customers/TM.png" width={65} height={30}/>
                </StyledCol>
                <StyledKwap>
                <StaticImage src="../../assets/about/customers/KWAP.png" width={96}/>
                </StyledKwap>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Alliance.png" width={70}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Hitachi.png" width={105}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Takaful.png" width={38}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Sunway.png" width={107}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Petrofac.png" width={116.6}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/TM.png" width={65} height={30}/>
                </StyledCol>
                <StyledKwap>
                <StaticImage src="../../assets/about/customers/KWAP.png" width={96}/>
                </StyledKwap>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Alliance.png" width={70}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Hitachi.png" width={105}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Takaful.png" width={38}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Sunway.png" width={107}/>
                </StyledCol>
                <StyledCol>
                <StaticImage src="../../assets/about/customers/Petrofac.png" width={116.6}/>
                </StyledCol>
                
  
                </SlideTrack>          
            </CustomersRow>
            <ButtonContainer>
                <MFAButton background={"#FF6938"} font={"#FFFFFF"}>
                See customer stories
                </MFAButton>
            </ButtonContainer>
        
        </Container>       
    </Layout>
    </>
)};