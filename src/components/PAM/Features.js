import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import andrea from '../../assets/andrea.png'
import cirbig from '../../assets/customer/cirbig.svg'
import cirsmall from '../../assets/customer/cirsmall.svg'
import rec from '../../assets/customer/rec.svg'
import recempty from '../../assets/customer/recempty.svg'
import { FeaturesBasicList } from './FeaturesBasicList.js'
import { FeaturesAdvancedList } from './FeaturesAdvancedList.js'


const Container = styled.div`
    height: 75.9375em;
    
    background: #FFFFFF;
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 2.0625em;
    margin-top: 8em;

    > h1 {
        position: absolute;
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        letter-spacing: -0.0125em;
    }
`

const StyledRow = styled(Row)`
    margin: 0;
    width: 64.225em;
    margin-left: 13.375em;
    display: flex;
    align-content: space-around;
`

const StoriesCol = styled.div`
    padding: 0; 
    justify-content: center; 
    display: flex;
    margin-bottom: 2.0625em;
    margin-right: 1.9375em;
    &:last-child {
        margin-right: 0;
    }
`

const StyledBasic = styled.button`
    font-family: Messina Sans semibold;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.468px;
    text-align: center;
    padding: 0;
    
    color: ${props => (props.state == true ? "#073233" : "#B6B6B6")};
    transition: 0.3s;
    background: none;
    border: none;
        margin-left: 40.5em;

`

const StyledAdvanced = styled.button`
    font-family: Messina Sans semibold;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.468px;
    text-align: center;
    padding: 0;
    
    color: ${props => (props.state == true ? "#B6B6B6" : "#073233")};
    transition: 0.3s;
    background: none;
    border: none;
    margin-left: 2.59375em;   
`

const StyledButtonsRow = styled.div`
    margin: 0;
    align-items: flex-start;
    display: flex;
    height: 2.25em;
    margin-bottom: 3.1875em;
`

const StyledLine = styled(Row)`
    margin: 0;
    margin-top: 2.0625em;
    margin-left: 13.4375em;
    width: 63.125em;
    height: 0.1875em;
    background-color: #EDEDED;
    z-index: 1;
    position: absolute;
`

const StyledUnderline = styled.div`
    background-color: #FF6938;
    margin-left: ${props => (props.state == true ? "25.5em" : "31.3125em")};
    width: ${props => (props.state == true ? "5.8125em" : "7.425em")};;
    transition-timing-function: ease-in-out;
    height: 0.1875em;
    z-index: 2;
    position: absolute;
    transition: 0.3s;
`



export const Features = () => {
    const [ active, setActive ] = useState(true); 
    return (
        <Container>
            <Row style={{textAlign: "center", marginLeft: 0, marginRight: 0}}>
                <StyledTitle>
                    <h1>
                    Features overview
                    </h1>
                </StyledTitle>
            </Row>
            <StyledButtonsRow>
                <StyledBasic onClick={() => setActive(true)} state={active}>
                    Basic
                </StyledBasic>
                <StyledAdvanced onClick={() => setActive(false)} state={active}>
                    Advanced
                </StyledAdvanced>
                <StyledLine>
                    <StyledUnderline state={active} />
                </StyledLine>
                
            </StyledButtonsRow>
            <FeaturesBasicList state={active} />
            <FeaturesAdvancedList state={active} />

            
        </Container>
    )
}