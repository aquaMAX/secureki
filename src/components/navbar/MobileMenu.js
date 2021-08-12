import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

const Container = styled.div`
    height: ${props=>props.status === true ? "100vh" : "0"};
    min-width: 100vw;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    background: #ffffff;
    box-shadow: inset 0px 4px 20px rgba(7, 50, 51, 0.04);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: rotate3d(45deg); 


`

const StyledRow = styled(Row)`
    margin: 0;
    padding: 0;
`

const StyledCol = styled(Col)`
    margin: 0;
    padding: 0;
`

const StyledUnderline = styled.div`
    margin: 0;
    padding: 0;
    margin-left: 1.125rem;
    margin-right: 1.625rem;
    width: 100%;
    opacity: 0.3;
    border-bottom: 1px solid #BDCCC7;
    transition: 0s cubic-bezier(.83,.13,.18,1.06);
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`

const StyledProduct = styled.div`
    margin-top: 2.875rem;
    margin-left: 1.9375rem;
    margin-bottom: 1.1875rem;

    font-family: Messina Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3125rem;
    letter-spacing: 0rem;
    text-align: left;
    

    /* or 356% */

    color: #073233;
    transition: 0s cubic-bezier(.83,.13,.18,1.06);
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`

const StyledResources = styled.div`
    margin-top: 1.3125rem;
    margin-left: 1.9375rem;
    margin-bottom: 1.1875rem;
    font-family: Messina Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3125rem;
    letter-spacing: 0px;
    text-align: left;
    color: #073233;
    transition: 0s cubic-bezier(.83,.13,.18,1.06);
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`

const StyledCompany = styled.div`
    margin-top: 1.3125rem;
    margin-left: 1.9375rem;
    
    font-family: Messina Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3125rem;
    letter-spacing: 0rem;
    text-align: left;
    color: #073233;
    transition: 0s cubic-bezier(.83,.13,.18,1.06);
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`

const StyledButtonRow = styled(Row)`
    margin-top: 4.5rem;
    
    margin-bottom: 1.1875rem;

    display: flex;
    justify-content: center;
    transition: 0s;
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`

const StyledButton = styled.button`
    background-color: #FF6938;
    height: 3.25rem;
    width: 21.1875rem;

    border-width: 0;
    border-radius: 1.875rem;
    padding: 0.75rem, 1.25rem, 0.75rem, 1.25rem;

    color: #FFFFFF;

    font-family: Messina Sans semibold;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: center;
`
const StyledIcon = styled.svg`
    margin-left: auto;
`

const StyledIconCol = styled(Col)`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    margin-right: 2.6875rem;
    margin-top: 1.6875rem;
    transition: 0s cubic-bezier(.83,.13,.18,1.06);
    visibility: ${props=>props.status === true ? "visible" : "hidden"};
`
const Icon = () => {
    return (
        <StyledIcon width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M1.08062 0C0.242118 0 -0.224055 0.969932 0.299756 1.62469L2.21913 4.02391C2.61946 4.52432 3.38054 4.52432 3.78087 4.02391L5.70024 1.6247C6.22405 0.969932 5.75788 0 4.91938 0H1.08062Z" fill="#FF6938"/>
        </StyledIcon>
    )
}

const StyledProductLinkRow = styled(Row)`
    height: ${props=>props.currentMenu === "Product" ? "auto" : 0 };
    visibility: ${props=>props.currentMenu === "Product" && props.status === true ? "visible" : "hidden" };
    margin: 0;
    padding: 0;
    margin-left: 3.3125rem;
    margin-top: ${props=>props.currentMenu === "Product" ? "0.8125rem" : 0};
    font-family: Messina Sans semibold;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3125rem;
    letter-spacing: 0rem;
    text-align: left;
    color: #073233;
    /*transform: ${props=>props.currentMenu === "Product" ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0s cubic-bezier(.83,.13,.18,1.06); */
    
`

const StyledResourcesLinkRow = styled(Row)`
    height: ${props=>props.currentMenu === "Resources" ? "auto" : 0 };
    visibility: ${props=>props.currentMenu === "Resources" && props.status === true ? "visible" : "hidden" };
    margin: 0;
    padding: 0;
    margin-left: 3.3125rem;
    margin-top: ${props=>props.currentMenu === "Resources" ? "0.8125rem" : 0};
    font-family: Messina Sans semibold;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3125rem;
    letter-spacing: 0rem;
    text-align: left;
    color: #073233;
    /* transition: height 0s;
    transition: margin-top 0s cubic-bezier(.83,.13,.18,1.06); */
`

const StyledCompanyLinkRow = styled(Row)`
    height: ${props=>props.currentMenu === "Company" ? "auto" : 0 };
    visibility: ${props=>props.currentMenu === "Company" && props.status === true ? "visible" : "hidden" };
    margin: 0;
    padding: 0;
    margin-left: 3.3125rem;
    margin-top: ${props=>props.currentMenu === "Company" ? "0.8125rem" : 0};
    font-family: Messina Sans semibold;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3125rem;
    letter-spacing: 0rem;
    text-align: left;
    color: #073233;
   /* transition: height 0s;
    transition: margin-top 0s cubic-bezier(.83,.13,.18,1.06); */
`

const Breaker = styled.br`
    display: none; 
    @media (max-width: 991px ) {
        display: block;
    }
`

const StyledLink = styled(Link)`
    color: #073233;
    &:hover {
        text-decoration: none;
        color: #073233;
    }
`



const MobileMenu = ({status}) => {
    const [currentMenu, selectMenu ] = useState();
    return (
        <Container status={status}>
            <StyledRow onClick={()=>selectMenu("Product")}>
                <StyledCol>
                    <StyledProduct status={status}>
                        Product
                    </StyledProduct>
                    
                </StyledCol>
                <StyledIconCol style={{marginTop: "3.25rem"}} status={status}>
                    <Icon />
                </StyledIconCol>
                <StyledUnderline status={status}/>
            </StyledRow>
            <StyledLink to={"/mfa"}>
                <StyledProductLinkRow currentMenu={currentMenu} status={status}>
                    Multifactor <Breaker /> Authentication (MFA)
                </StyledProductLinkRow>
            </StyledLink>
            <StyledLink to={"/pam"}>
                <StyledProductLinkRow currentMenu={currentMenu} status={status}>
                    Privileged Access <Breaker /> Management (PAM)
                </StyledProductLinkRow>
            </StyledLink>
            <StyledRow onClick={()=>selectMenu("Resources")}>
                <StyledCol>
                    <StyledResources status={status}>
                        Resources
                    </StyledResources>
                </StyledCol>
                <StyledIconCol status={status}>
                    <Icon />
                </StyledIconCol>
                <StyledUnderline status={status} />
            </StyledRow>
            <StyledResourcesLinkRow currentMenu={currentMenu} status={status}>
                Newsroom
            </StyledResourcesLinkRow>
            <StyledResourcesLinkRow currentMenu={currentMenu} status={status}>
                Resources
            </StyledResourcesLinkRow>
            <StyledRow onClick={()=>selectMenu("Company")}>
                <StyledCol>
                    <StyledCompany status={status}>
                        Company
                    </StyledCompany>
                </StyledCol>
                <StyledIconCol status={status}>
                    <Icon />
                </StyledIconCol>
            </StyledRow>
            <StyledLink to={"/careers"}>
                <StyledCompanyLinkRow currentMenu={currentMenu} status={status}>
                    Career
                </StyledCompanyLinkRow>
            </StyledLink>
            <StyledLink to={"/about"}>
                <StyledCompanyLinkRow currentMenu={currentMenu} status={status}>
                    About Us
                </StyledCompanyLinkRow>
            </StyledLink>
                <StyledCompanyLinkRow currentMenu={currentMenu} status={status}>
                    Blog
                </StyledCompanyLinkRow>
            <StyledButtonRow status={status}>
                <StyledButton status={status}>
                    Request a demo
                </StyledButton>
            </StyledButtonRow>
        </Container>
    )
}

export default MobileMenu
