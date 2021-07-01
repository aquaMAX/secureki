import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import feature from '../../assets/pam/feature-1.svg'

const Container = styled.div`
    width: 19.8125em;
    height: 22.0625em;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 5px;
    align-items: center;
    z-index: 2;

`

const TextContainer = styled(Row)`
    /* Subtitle Text */
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.625em;
    text-align: left;
    vertical-align: top;
    /* or 156% */

    color: #5F6E70;
    min-width: 15.75em;

    margin: 0;
    margin-left: 2.0625em;
    margin-top: 1.25em;
    margin-bottom: 1.625em;
    padding-right: 2em;
`

const StyledIcon = styled.img`
    padding-left: 2.0625em;
    
    padding-top: 1.8125em;
    margin-bottom: 1.25em;
`

const StyledTitle = styled.div`

    font-family: Messina Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;

    padding-left: 1.65em;

`

const FeaturesElement = ({story, title}) => {
    return (
        <Container>
                <StyledIcon src={feature}/>

                <StyledTitle>
                    {title}
                </StyledTitle>
                <TextContainer>
                    {story}
                </TextContainer>

            
        </Container>
    )
}

export default FeaturesElement;
