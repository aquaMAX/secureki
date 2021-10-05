import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"
import mark from "../../assets/footermark.svg"
import instagram from "../../assets/logos/instagram.svg"
import facebook from "../../assets/logos/facebook.svg"
import linkedin from "../../assets/logos/linkedin.svg"

const Container = styled.div`
    height: 24.9375em;
    background: #073233;
    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    background: #073233;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 54.6875rem;
    } 

`

const StyledCol = styled.div`
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    
    > p {
        
        font-family: Messina Sans;
        font-style: regular;
        font-weight: 400;
        font-size: 0.875em;
        line-height: 1.7142857142857142em;
        /* identical to box height, or 171% */
        //letter-spacing:  0.0071428571428571435em;
        color: #B5C1C2;
        opacity: 1;
        /* Inside Auto Layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0.3125em 0;
        transition: 0.3s;
        &:hover {
            transform: translateX(0.75em);
            cursor: pointer;
        }
        @media (max-width: 991px) {
            margin: 0;
            margin-bottom: 0.3125rem;
            font-size: 0.875rem;
            line-height: auto;
    } 
}

    > h1 {
        /* First page */
        font-family: Messina Sans semibold;
        font-style: regular;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.5em;
        /* identical to box height, or 150% */
        //letter-spacing:  0.0325em;

        color: #FFFFFF;
        @media (max-width: 991px) {
            margin-bottom: 0.3125rem;
    } 
}
`

const StyledUnderline = styled.div`
    /* Line 2 */
    width: 100%;    
    opacity: 0.3;
    background: #073233;
    border-bottom: 1px solid #FFFFFF;
    transform: rotate(-0.05deg);
    margin-left: 10.4375em;
    margin-right: 10.4375em;
    @media (max-width: 991px) {
        margin-left: 1.125rem;
        margin-right: 1.125rem;
    } 
    
`

const StyledRow = styled(Row)`
    padding-top: 5.125em;
    padding-bottom: 5.625em;
    padding-left: 10.5em; 
    margin-left: 0;
    margin-right: 0;
    @media (max-width: 991px) {
        padding-top: 3.3125rem;
        padding-bottom: 2.9375rem;
        padding-left: 1.125rem; 
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
    }
`

const NoMarginRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
`

const NoMarginPolicyRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
    padding-top: 2.7142857142857144em;
    background: #073233;
    @media (max-width: 991px) {
        padding-top: 2.5rem;
    } 
    
`

const StyledPolicy = styled(Col)`
    /* Terms of Service */
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875em;
    line-height: 1.4285714285714286em;
    /* identical to box height, or 143% */
    display: flex;
    color: #B5C1C2;
> p {
    opacity: 1;
    margin-right: 10.86464em; 
    @media (max-width: 991px) {
        margin-right: 0;
        margin-left:  1.5rem;
    } 
}
`

const StyledParagraph = styled.div`
    padding-left: 0.8571428571428571em;
    padding-right: 0.8571428571428571em;
    margin-left: auto;
    opacity: 1;
    @media (max-width: 991px) {
        margin-left: 0;
        
        padding-left: 0;
        padding-right: 0;
    } 
`

const StyledRights = styled.div`
    margin-left: 10.4375em;
    opacity: 1;
    color: #B5C1C2;
    font-family: Messina Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    //letter-spacing:  0rem;
    text-align: left;
    @media (max-width: 991px) {
        margin-left: 0;
        margin-bottom: 0.5625rem;
    } 

`

const StyledImgCol = styled(Col)`
    padding: 0;
    margin-top: 0.3125em;
    margin-right: 3rem;
`

const StyledSocials = styled.img`
    margin-right: 0.75em;
    color: #B5C1C2;
    opacity: 0.6;
    font-family: Messina Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    //letter-spacing:  0rem;
    text-align: left;
`

const Product = styled(Col)`
    margin-right: 5.375rem;
    min-width: 13rem;
    padding: 0;
    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: 1.375rem;
        margin-bottom: 2.5rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-right: 3.375rem;
    }
`

const Resources = styled(Col)`
    max-width: 7.25rem;
    margin-right: 7.4375rem;
    margin-left: 0;
    padding: 0;
    @media (max-width: 991px) {
        margin-left: 0;
        margin-bottom: 2.5rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-right: 3.375rem;
    }
`

const Company = styled(Col)`
    max-width: 5rem;
    margin-right: 7.4375rem;
    margin-left: 0;
    padding: 0;
    @media (max-width: 991px) {
        margin-left: 0;
        margin-bottom: 2.5rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-right: 3.375rem;
    }
`

const Findus = styled(Col)`
    margin-left: 0;
    padding: 0;
    @media (max-width: 991px) {
        margin-left: 0;
    } 
`



export const Footer = () => {
    return (
        <div style={{background: "#073233"}}>
            <Container>
            <StyledRow xs={1} lg={6}>
                <StyledImgCol lg={1}>
                    <img src={mark} />
                </StyledImgCol>
                    <Product>
                        <StyledCol>
                            <h1>Product</h1>
                            <p>Multifactor Authentication</p>
                            <p>Privileged Access Management</p>
                        </StyledCol>
                    </Product>
                    <Resources>
                        <StyledCol>
                            <h1>Resources</h1>
                            <p>Datasheet</p>
                            <p>Customer Stories</p>
                        </StyledCol>
                    </Resources>
                    <Company>
                        <StyledCol>
                            <h1>Company</h1>
                            <p>Newsroom</p>
                            <p>About Us</p>
                            <p>Career</p>
                        </StyledCol>
                    </Company>
                    <Findus>
                        <StyledCol>
                            <h1>Find us</h1>
                            <p><StyledSocials src={instagram} />Instagram</p>
                            <p><StyledSocials src={facebook} />Facebook</p>
                            <p><StyledSocials src={linkedin} />Linkedin</p>
                        </StyledCol>
                    </Findus>
            </StyledRow>
            <NoMarginRow>
                <StyledUnderline />
            </NoMarginRow>
            <NoMarginPolicyRow xs={1} lg={2}>
                <StyledPolicy>
                    <StyledRights>© 2021 SecureKi. All right reserved.</StyledRights>
                </StyledPolicy>
                <StyledPolicy>
                    <StyledParagraph>Privacy Policy</StyledParagraph>
                    <p>Terms of Service</p>
                </StyledPolicy>
            </NoMarginPolicyRow>

        </Container>
        </div>
        
    )
}
