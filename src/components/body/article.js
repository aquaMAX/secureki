import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import hero from "../../assets/hero NEW 1.png"
import StyledButton from "../navbar/Button.js"

const StyledImage = styled.img`
    display: block;
    border-radius: 0px;
    margin-bottom: 0px;
    width: 42.875em;
    height: 32.5em;
    position: absolute;
    display: flex;
    float: right;
    margin-left: 2.125em;
    
`
const FixedCol = styled(Col)`
    justify-content: space-between;
    align-items: stretch;
    padding-right: 0px;
    padding-left: 0px;
    width: 42.875em;
    height: 32.5em;
    display: flex;
    float: right;
    justify-content: space-between;
    
`

const StyledContent = styled.div`
    padding-top: 4.8125em;
`


const FixedRow = styled(Row)`
    margin: 0;
`

const StyledTitle = styled.div`
        /* Medium length displa */

    position: static;
    width: 487px;
    height: 129px;
    left: 0px;
   

    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 60px;
    /* or 107% */
    letter-spacing: -1px;

    color: #073233;

    mix-blend-mode: normal;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;
`
const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTextBody = styled.div`
    /* Separated they live */
    position: static;
    width: 487px;
    height: 77px;
    left: 0px;
    top: calc(50% - 77px/2 + 76.5px);

    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #17494D;

    mix-blend-mode: normal;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 2.5em;
    
`

const StyledLeftColumn = styled(Col)`
    margin-left: 10.5em;
    margin-right: 0;
    padding: 0;
    margin-top: 4.75em;
`

const StyledTrialText = styled.div`
    /* Separated they live */

    position: absolute;
    width: 4.1875em;
    height: 1.25em;
    margin-top: 1em;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.25em;
    /* identical to box height, or 125% */
    display: flex;
    align-items: center;

    color: #073233;

    mix-blend-mode: normal;

`

const FixedButtonsRow = styled(Row)`
    margin: 0;
    height: 1.25em;
    margin-bottom: 3.5em;
`

const StyledButtonFix = styled(StyledButton)`
    margin: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-right: 1.875em;
    padding-left: 1.875em;
`

const Notice = styled.div`
    position: absolute;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8125em;
    line-height: 2.1538461538461537em;

    color: #17494D;

    mix-blend-mode: normal;
`

const Article = () => {
    return (
        <StyledContent>
        <FixedRow>
            <>
            <StyledLeftColumn>
                <FixedRow>
                    <StyledTitle>
                        <FixedRow>Identity Security</FixedRow>
                        <FixedRow>for{'\u00A0'}<ColoredP>Your Workforce</ColoredP></FixedRow>
                    </StyledTitle>
                </FixedRow>
                <FixedRow>
                    <StyledTextBody>
                        Secure access for your business, customers, or employees with our unparalleled identity security backed by
                        a zero–trust philosophy.
                    </StyledTextBody>
                </FixedRow>
                <FixedButtonsRow>
                    <Col>
                        <Row>
                            <StyledButtonFix background="#FF6938" font="#FFFFFF">
                                Request a demo
                            </StyledButtonFix>
                        </Row>
                    </Col>
                    <Col>
                        <StyledTrialText>
                            <Row>
                                Free trial
                            </Row>
                        </StyledTrialText>
                    </Col>
                </FixedButtonsRow>
                <FixedRow>
                    <Col>
                        <Row>
                            <Notice>
                            *We never sell your data. No credit card required.
                            </Notice>
                        </Row>
                    </Col>
                </FixedRow>
            </StyledLeftColumn>
            </>

            <FixedCol xs={6}>
                <StyledImage src={hero}/>
            </FixedCol>
        </FixedRow>   
        </StyledContent>
    )
}

export default Article;
