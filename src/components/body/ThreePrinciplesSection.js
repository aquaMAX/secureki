import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import accesibility from '../../assets/logos/accesibility.svg'
import automation from '../../assets/logos/automation.svg'
import security from '../../assets/logos/Security.svg'

const Container = styled.div`
    height: 21.3125em;
 
    max-width: 90em;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    
    padding-top: 5.09375em;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 34.4375rem;
    } 

`
const StyledRow = styled(Row)`
    padding-left: 10.5rem;
    padding-right: 10.375rem;
    margin-left: 0;
    margin-right: 0;
    @media (max-width: 991px) {
        padding-left: 1.125rem;
        padding-right: 1.5rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 2rem;
        padding-right: 1rem;
    }

`

const StyledParagraph = styled(Row)`
    position: static;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    //letter-spacing:  0.00625em;
    color: #17494D;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 1em 0px;

`

const StyledTitle = styled.div` 
    position: static;

    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5em;
    line-height: 1.75em;
    /* identical to box height, or 117% */
    display: flex;
    align-items: center;

    color: #113A3B;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0em 0.6666666666666666em;
`

const StyledImage = styled.img`
    width: 3.125em;
    height: 3.125em;
    margin: 0;
`

const StyledAccesibilityCol = styled(Col)`
    padding: 0;
`

const StyledAutomationCol = styled(Col)`
    padding: 0;
    padding-left: 2.6875em;
    @media (max-width: 991px) {
        padding-left: 0;
    } 
`

const StyledSecurityCol = styled(Col)`
    padding: 0;
    padding-left: 2.6875em;
    @media (max-width: 991px) {
        padding-left: 0;
    } 
`

const StyledTitleRow = styled(Row)`
    margin: 0;
`

export const ThreePrinciplesSection = () => {
    return (
        <Container>
            <StyledRow xs={1} lg={3}>
                <StyledAccesibilityCol>
                    <StyledTitleRow>
                        <StyledImage src={accesibility} />
                        <StyledTitle>
                            Accessibility
                        </StyledTitle>
                    </StyledTitleRow>
                    <StyledParagraph>
                        Work securely from anywhere, anytime, across all devices for your users.
                    </StyledParagraph>
                </StyledAccesibilityCol>
                <StyledAutomationCol>
                    <StyledTitleRow>
                        <StyledImage src={automation} />
                        <StyledTitle>
                            Automation
                        </StyledTitle>
                    </StyledTitleRow>
                    <StyledParagraph>
                        Reduce operational cost and complexity with automated and streamlined processes 
                    </StyledParagraph>
                </StyledAutomationCol>
                <StyledSecurityCol>
                    <StyledTitleRow>
                        <StyledImage src={security} />
                        <StyledTitle>
                            Security
                        </StyledTitle>
                    </StyledTitleRow>
                    <StyledParagraph>
                        Prevent identity breaches and improve your security posture, giving you the peace of mind your business deserved.
                    </StyledParagraph>
                </StyledSecurityCol>
            </StyledRow>
        </Container>
    )
}
