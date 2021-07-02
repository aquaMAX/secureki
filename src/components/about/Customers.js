import * as React from "react";
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import StyledButton from '../navbar/Button.js'

import ebay from '../../assets/about/customers/ebay.svg'
import airbnb from '../../assets/about/customers/airbnb.svg'
import cisco from '../../assets/about/customers/cisco.svg'
import cnn from '../../assets/about/customers/cnn.svg'
import uber from '../../assets/about/customers/uber.svg'
import google from '../../assets/about/customers/google.svg'

const Layout = styled.div`
    max-width: 90em;
    height: 38.875rem;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    
`

const Container = styled.div`
     padding-top: 15.3125rem;
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
`

const ButtonContainer = styled.div`
    margin-top: 2.125rem;
    margin-left: 37.5rem;
`

const CustomersRow = styled(Row)`
    margin-top: 2.5rem;
    height: 3.0625rem;
    display: flex;
    justify-content: center;
`

const StyledCustomer = styled.img`
    margin-right: 3.125rem;
    &:last-child {
        margin-right: 0;
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
            <CustomersRow>
                <StyledCustomer src={ebay} />
                <StyledCustomer src={cnn} />
                <StyledCustomer src={google} />
                <StyledCustomer src={cisco} />
                <StyledCustomer src={airbnb} />
                <StyledCustomer src={uber} />
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