import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"
import mark from "../../assets/footermark.svg"

const Container = styled.div`
    height: 23.9375em;
    width: 100vw;
    background: #073233;


`

const StyledCol = styled(Col)`
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    
    > p {
        font-family: Messina Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 0.875em;
        line-height: 1.7142857142857142em;
        /* identical to box height, or 171% */
        letter-spacing: 0.0071428571428571435em;

        color: #FFFFFF;

        opacity: 0.7;

        /* Inside Auto Layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0.3125em 0;
}

    > h1 {
        /* First page */
        font-family: Messina Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 1em;
        line-height: 1.5em;
        /* identical to box height, or 150% */
        letter-spacing: 0.00625em;

        color: #FFFFFF;
}
`

const StyledUnderline = styled.div`
    /* Line 2 */
    width: 100%;    
    background: #E5E5E5;
    color: #E5E5E5;
    opacity: 0.3;
    border: 0.0625em solid #FFFFFF;
    transform: rotate(-0.05deg);
    margin-left: 10.4375em;
    margin-right: 10.4375em;
`

const StyledRow = styled(Row)`
    padding-top: 5.125em;
    padding-bottom: 5.625em;
    padding-left: 10.5em;
    padding-right: 19.625em;
    display: flex;
    justify-content: center;
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
    padding-bottom: 2.857142857142857em;
    background: #073233;
    
`

const StyledPolicy = styled(Col)`
    /* Terms of Service */


font-family: Messina Sans;
font-style: normal;
font-weight: normal;
font-size: 0.875em;
line-height: 1.4285714285714286em;
/* identical to box height, or 143% */
display: flex;

color: #FFFFFF;

opacity: 0.6;
> p {
   padding-right: 10.4375em; 
}
`

const StyledParagraph = styled.div`
    padding-left: 0.8571428571428571em;
    padding-right: 0.8571428571428571em;
    margin-left: auto;
`

const StyledRights = styled.div`
    padding-left: 14.6875em;
`

const StyledImgCol = styled(Col)`
    padding: 0;
    margin-top: 0.3125em;
`

export const Footer = () => {
    return (
        <Container>
            <StyledRow>
                <StyledImgCol>
                    <img src={mark} />
                </StyledImgCol>
                <StyledCol xs={4}>
                    <h1>Product</h1>
                    <p>Multifactor Authentication</p>
                    <p>Privileged Access Management</p>
                </StyledCol>
                <StyledCol>
                    <h1>Resources</h1>
                    <p>Datasheet</p>
                    <p>Customer Stories</p>
                </StyledCol>
                <StyledCol>
                    <h1>Company</h1>
                    <p>Newsroom</p>
                    <p>About Us</p>
                    <p>Career</p>
                </StyledCol>
                <StyledCol>
                    <h1>Find us</h1>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                </StyledCol>
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
    )
}
