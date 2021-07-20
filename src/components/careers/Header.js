import * as React from "react";
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import image from '../../assets/careers/header/Group 605.png'


const Layout = styled.div`
    max-width: 90em;
    height: 79.1875rem;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 30.3125rem;
    } 
`

const StyledTitle = styled(Col)`
    /* Short headline */
    margin-top: 12.875rem;
    height: 4.5rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    > h1 {
        margin-top: 12.875rem;
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 3.5em;
        line-height: 0.8571428571428571em;
        text-align: center;
        letter-spacing: -0.008928571428571428em;
        @media (max-width: 991px) {
            font-size: 2.375rem;
            margin-top: 8.4375rem;
        }
    }
`

const StyledImage = styled.img`
    width: 68.3125rem;
    margin-top: 15.4375rem;
    margin-left: 11.625rem;
    @media (max-width: 991px) {
        margin-top: 8.375rem;
        margin-left: 0;
        width: auto;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: auto;
        width: auto;
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
    
`

const StyledRow = styled(Row)`
    margin: 0;
    padding: 0;
`

const StyledCol = styled(Col)`
    margin: 0;
    padding: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: auto;
        width: auto;
        display: flex;
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
`

const CareersHeader = () => {
return (
    <>
    
    <Layout>
 
   
    <StyledRow xs={1}>
        
                <StyledTitle>
                        <h1>
                        We are SecureKi
                        </h1>
                </StyledTitle>
        <StyledCol>
            <StyledImage src={image} /> 
        </StyledCol>
        
    </StyledRow>   

                
                
                
    </Layout>
    
    
    </>
)};

export default CareersHeader;