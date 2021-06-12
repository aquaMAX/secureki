import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Container = styled.div`
    height: 21.3125em;
    width: 100vw;
    padding-top: 5.09375em;
`
const StyledRow = styled(Row)`
    padding-left: 10.5em;
    padding-right: 10.5em;
    margin-left: 0;
    margin-right: 0;
`

const StyledParagraph = styled(Row)`
    position: static;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    letter-spacing: 0.00625em;
    color: #17494D;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 1em 0px;
`

const StyledTitle = styled(Row)` 
    position: static;

    font-family: Messina Sans;
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
    margin: 0em 1em;
`

export const ThreePrinciplesSection = () => {
    return (
        <Container>
            <StyledRow>
                <Col>
                    <StyledTitle>
                        Accessibility
                    </StyledTitle>
                    <StyledParagraph>
                        Work securely from anywhere, anytime, across all devices for your users.
                    </StyledParagraph>
                </Col>
                <Col>
                    <StyledTitle>
                        Automation
                    </StyledTitle>
                    <StyledParagraph>
                        Reduce operational cost and complexity with automated and streamlined processes 
                    </StyledParagraph>
                </Col>
                <Col>
                    <StyledTitle>
                        Security
                    </StyledTitle>
                    <StyledParagraph>
                        Prevent identity breaches and improve your security posture, giving you the peace of mind your business deserved.
                    </StyledParagraph>
                </Col>
            </StyledRow>
        </Container>
    )
}
