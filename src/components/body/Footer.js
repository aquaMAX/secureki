import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"
import mark from "../../assets/footermark.svg"
import instagram from "../../assets/logos/instagram.svg"
import facebook from "../../assets/logos/facebook.svg"
import linkedin from "../../assets/logos/linkedin.svg"

const Container = styled.div`
    height: 23.9375em;
    background: #073233;
    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;

`

const StyledCol = styled.div`
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    
    > p {
        font-family: Messina Sans;
        font-style: regular;
        font-weight: 200;
        font-size: 0.875em;
        line-height: 1.7142857142857142em;
        /* identical to box height, or 171% */
        letter-spacing: 0.0201428571428571435em;

        color: #B5C1C2;

        opacity: 1;

        /* Inside Auto Layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0.3125em 0;
}

    > h1 {
        /* First page */
        font-family: Messina Sans book;
        font-style: regular;
        font-weight: 200;
        font-size: 1em;
        line-height: 1.5em;
        /* identical to box height, or 150% */
        letter-spacing: 0.0325em;

        color: #FFFFFF;
}
`

const StyledUnderline = styled.div`
    /* Line 2 */
    width: 100%;    
    opacity: 0.3;
    background: #073233;
    border: 1px solid #FFFFFF;
    border-width: 0.5px;
    transform: rotate(-0.05deg);
    margin-left: 10.4375em;
    margin-right: 10.4375em;
`

const StyledRow = styled(Row)`
    padding-top: 5.125em;
    padding-bottom: 5.625em;
    padding-left: 10.5em;
    
    margin-left: 0;
    margin-right: 0;
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
    
`

const StyledPolicy = styled(Col)`
    /* Terms of Service */


font-family: Messina Sans;
font-style: normal;
font-weight: 200;
font-size: 0.875em;
line-height: 1.4285714285714286em;
/* identical to box height, or 143% */
display: flex;

color: #B5C1C2;


> p {
    opacity: 0.8;
   padding-right: 10.4375em; 
}
`

const StyledParagraph = styled.div`
    padding-left: 0.8571428571428571em;
    padding-right: 0.8571428571428571em;
    margin-left: auto;
    opacity: 0.8;
`

const StyledRights = styled.div`
    padding-left: 14.6875em;
    opacity: 1;
    color: #B5C1C2;
`

const StyledImgCol = styled.div`
    padding: 0;
    margin-top: 0.3125em;
`

const StyledSocials = styled.img`
    margin-right: 0.75em;
    color: #B5C1C2;
    opacity: 0.8;
`

const Product = styled.div`
    margin-left: 6em;
`

const Resources = styled.div`
    margin-left: 5.375em;
`

const Company = styled.div`
    margin-left: 7.4375em;
`

const Findus = styled.div`
    margin-left: 7.525em;
`

export const Footer = () => {
    return (
        <div style={{background: "#073233"}}>
            <Container>
            <StyledRow>
                <StyledImgCol>
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
            <NoMarginPolicyRow>
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
