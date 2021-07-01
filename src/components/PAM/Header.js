import React from 'react'

import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Header from '../../assets/PAM/header.png'
import StyledButton from '../navbar/Button.js'
import checkpoint from '../../assets/MFA/checkpoint.svg'

const Layout = styled.div`
    max-width: 90em;
    height: 60.75em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const FixedRow = styled(Row)`
    margin: 0;
`

const TextRow = styled(Row)`
    margin: 0;
    flex-wrap: nowrap;
    align-items: flex-start;
`

const FixedCol = styled(Col)`

`

const StyledText = styled(Col)`
    margin-top: 13.625em;
    margin-left: 10.3125em;
    max-width: 29.3125em;
    padding: 0;
`
const StyledImageContainer = styled(Col)`
    padding: 0;
`

const StyledImage = styled.img`
    margin-top: 12.6875em;
    margin-right: 5.3125em;
    margin-bottom: 0;
    width: 46.75em;
    position: absolute;
    z-index: -1;
`

const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTitle = styled.div`
    /* Medium length displa */
    width: 8.333333333333334em;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 3.1875em;
    line-height: 1.1764705882352942em;
    /* or 118% */
    letter-spacing: -0.0196078431372549em;
    color: #073233;
`

const StyledBody = styled.div`
    /* Separated they live */
    width: 28.27777777777778em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 156% */

    color: #17494D;
    margin-top: 1.5555555555555556em;
    margin-bottom: 0.7777777777777778em;
    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;

`

const StyledList = styled.div`
    margin-bottom: 2.375em;
    width: 28.625em;
`

const MFAButton = styled(StyledButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75em 2.625em;
    background: #FF6938;
    border-radius: 1.875em;
    margin: 0;
`

const StyledCheckpoint = styled.img`
    margin-right: 0.75em;
    margin-bottom: 0;
`

const StyledParagraph = styled.div`
    > .paragraph {
        margin-bottom: 0.5em;
        > p {
            margin-bottom: 0;
            font-family: Messina Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 1em;
            line-height: 1.5em;
            /* identical to box height, or 150% */
            display: flex;
            align-items: center;
            letter-spacing: 0.00625em;
            
            color: #17494D; 
        }
    }
`

export const PAMHeader = () => {
return (
    <Layout>
        <FixedRow>
            <StyledText>
                <StyledTitle> 
                Privileged Access Management 
                <TextRow>from{'\u00A0'}<ColoredP>SecureKi</ColoredP></TextRow>    
                </StyledTitle>
                <StyledBody>
                Our next generation of privileged access management (PAM) solution is a simple-to-deploy, automated, proven solution to secure your privileged credentials in any physical and virtual environment.
                </StyledBody>
                <StyledList>
                    <StyledParagraph>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Centrally secures and control access to privileged credentials based on privileged access security policies</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Streamlined administrator and end-user workflow approval with OTP</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />    
                            <p>Built-in reporting system for internal and external audit</p>
                        </TextRow>
                    </StyledParagraph>
                </StyledList>
                <TextRow>
                <MFAButton background={"#FF6938"} font={"#FFFFFF"}>
                    Try free
                </MFAButton>
                </TextRow>
                
            
            </StyledText>
            <StyledImageContainer>
                <StyledImage src={Header}/>
            </StyledImageContainer>
        </FixedRow>
    </Layout>
)};


