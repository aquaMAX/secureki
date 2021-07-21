import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import hero from "../../assets/hero NEW 1.png"
import StyledButton from "../navbar/Button.js"
import square from "../../assets/decorations/square.svg"
import circle from "../../assets/decorations/circle.svg"
import smallcircle from "../../assets/decorations/smallcircle.svg"


const StyledImage = styled.img`
    border-radius: 0;
    margin-bottom: 0;
    min-width: 42.875em;
    height: 32.5em;
    margin-top: 12.25em;

    @media (max-width: 1439px) {
        min-width: auto;
        max-width: 53.5vw;
        height: auto;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        margin-top: 3.1875rem;
    } 
    
`
const FixedCol = styled(Col)`
    padding-right: 0;
    padding-left: 0;
`

const StyledContent = styled.div`
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
    }
`

const StyledTitle = styled.div`
        /* Medium length displa */

    font-family: "Messina Sans bold";
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
    margin-bottom: 0.42857142857142855em;
    @media (max-width: 1439px) {
        font-size: calc(100vw / 25)
    }
    @media (max-width: 991px) {
        margin-left: 1.3125rem;
        margin-right: 1.25rem;
        font-family: Messina Sans Bold;
        font-size: 2.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: -0.0625rem;
        text-align: center;

        > .Title {
            justify-content: center;
        }

    }

`
const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTextBody = styled.div`
    font-family: 'Messina Sans';
    font-style: regular;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    opacity: 1;
    /* or 156% */
    color: #17494D;
    mix-blend-mode: normal;
    margin-right: 5.555555555555555em;
    margin-bottom: 2.2222222222222223em;
    @media (max-width: 991px) {
        font-family: Messina Sans;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: 0rem;
        text-align: center;
        margin-left: 1.125rem;
        margin-right: 1.125rem;
        margin-bottom: 0;
        justify-content: center;


    }
`

const StyledLeftColumn = styled(Col)`
    margin-left: 10.5em;
    margin-right: 0;
    padding: 0;
    margin-top: 17em;
    @media (max-width: 1439px) {
        margin-left: 3.125rem;
    }
    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: 8.4375rem;
    }
`

const ButtonsRow = styled(Row)`
    justify-content: center;
    display: flex;
`

const StyledTrialText = styled.button`
    /* Separated they live */

    position: absolute;
    
    height: 1.25em;
    margin-top: 1em;

    font-family: Messina Sans semibold;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.25em;
    /* identical to box height, or 125% */
    display: flex;
    align-items: center;
    margin-left: 13.9375em;
    color: #073233;

    mix-blend-mode: normal;
    
    border: 0;
    background: none;
    padding: 0;
    border-bottom: 3px solid #FF6938;
    transition: 0.3s;
    &:hover {
        color: #1E5A5F;
        
    }
    @media (max-width: 991px) {
        margin-left: 9.625rem;
        margin-top: 6.5rem;    
    } 
`




const StyledButtonFix = styled(StyledButton)`
    margin: 0;
    padding-top: 0.6666666666666666em;
    padding-bottom: 0.7888888888888888em;
    padding-right: 1.6666666666666667em;
    padding-left: 1.6666666666666667em;
    font-family: Messina Sans semibold;
    font-size: 1.125em;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3333333333333333em;
    letter-spacing: 0.005555555638339784em;
    text-align: center;
    border-radius: 1.6666666666666667em;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
    }
    @media (max-width: 991px) {
        margin-left: 5.25rem;
        margin-top: 1.6875rem;    
    } 

`

const Notice = styled.div`
    
    margin-top: 4.5em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 200;
    font-size: 0.8125em;
    line-height: 2.1538461538461537em;
    color: #17494D;
    mix-blend-mode: normal;
    @media (max-width: 991px) {
        margin-left: 2.6875rem;
        margin-top: 9.3125rem;    
    } 
`

const StyledSquare = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 6.75em;
    margin-top: 13.75em;
    @media (max-width: 1439px) {
        margin-left: -0.45rem;
        margin-top: 6.625rem;
        max-height: 8.1875rem;
    }

`

const StyledSmallOneCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 2em;
    margin-top: 46.125em;
    @media (max-width: 1439px) {
        display: none;
    }
`

const StyledCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 5.125em;
    margin-top: 39.625em;
    @media (max-width: 1439px) {
        display: none;
    }

`

const StyledSmallTwoCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 3.0625em;
    margin-top: 37.1875em;
    @media (max-width: 1439px) {
        display: none;
    }
    
`

const StyledSmallThreeCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 44.25em;
    margin-top: 37.9375em;
    @media (max-width: 1439px) {
        display: none;
    }
`

const FixedButtonsRow = styled(Row)`
    margin: 0;
`

const FixedRow = styled(Row)`
    margin: 0;
    
`



const Article = () => {
    return (
        

        
        <StyledContent>
        <StyledSquare src={square} />
        <StyledCircle src={circle} />
        <StyledSquare src={square} />
        <StyledSmallOneCircle src={smallcircle} />
        <StyledSmallTwoCircle src={smallcircle} />
        <StyledSmallThreeCircle src={smallcircle} />
            
        <FixedRow xs={1} lg={2}>

            <>
            <StyledLeftColumn lg={5} xl>
                <FixedRow>
                    
                    <StyledTitle>
                        <FixedRow className="Title">Identity Security</FixedRow>
                        <FixedRow>for{'\u00A0'}<ColoredP>Your Workforce</ColoredP></FixedRow>
                    </StyledTitle>
                </FixedRow>
                <FixedRow>
                    <StyledTextBody>
                        Secure access for your business, customers, or employees with our unparalleled identity security backed by
                        <br />a zero–trust philosophy.
                    </StyledTextBody>
                </FixedRow>
                <FixedButtonsRow xs={1} lg={2}>
                    
                    <StyledButtonFix background="#FF6938" font="#FFFFFF">
                        Request a demo
                    </StyledButtonFix>
                    <StyledTrialText>
                        Free trial
                    </StyledTrialText>
                    
                </FixedButtonsRow>
                <FixedRow>
                    
                    <Notice>
                    *We never sell your data. No credit card required.
                    </Notice>
                    
                </FixedRow>
            </StyledLeftColumn>
            </>

            <FixedCol xl>
                <StyledImage src={hero}/>
            </FixedCol>
        </FixedRow>   
        </StyledContent>
        
    )
}

export default Article;
