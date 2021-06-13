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
    margin-left: auto;
    
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

    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5em;
    line-height: 1.0714285714285714em;
    /* or 107% */
    letter-spacing: -0.017857142857142856em;
    color: #073233;

    mix-blend-mode: normal;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0.42857142857142855em 0px;
`
const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTextBody = styled.div`
    /* Separated they live */
    position: static;
    width: 27.055555555555557em;
    height: 4.277777777777778em;


    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
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

const ButtonsRow = styled(Row)`
    justify-content: center;
    display: flex;
`

const StyledTrialText = styled.div`
    /* Separated they live */

    position: absolute;
    
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
    margin-left: 14.9375em;
    color: #073233;

    mix-blend-mode: normal;

    border-bottom: 3px solid #FF6938;
`

const FixedButtonsRow = styled(Row)`
    margin: 0;
    height: 1.25em;
    margin-bottom: 3.5em;
`

const StyledButtonFix = styled(StyledButton)`
    margin: 0;
    padding-top: 0.6666666666666666em;
    padding-bottom: 0.8888888888888888em;
    padding-right: 1.6666666666666667em;
    padding-left: 1.6666666666666667em;
    font-family: Messina Sans;
    font-size: 1.125em;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3333333333333333em;
    letter-spacing: 0.005555555638339784em;
    text-align: center;
    border-radius: 1.6666666666666667em;

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
                        <StyledTrialText>
                                Free trial
                        </StyledTrialText>
                        </Row>
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

            <FixedCol>
                <StyledImage src={hero}/>
            </FixedCol>
        </FixedRow>   
        </StyledContent>
    )
}

export default Article;
