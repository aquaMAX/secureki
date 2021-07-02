import React from 'react'
import { StackedPictures } from '../body/StackedPictures'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap"

const Container = styled.div`
    height: 44.4375rem;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    padding-left: 0;
    padding-right: 0;
`

const ImageContainer = styled(Col)`
    padding: 0;
`
const StyledRow = styled(Row)`
    padding-left: 10.4375rem;
    
    margin-right: 0;
    margin-left: 0;
`

const StyledTitle = styled.div`

    
    width: 7.770833333333333em;
    margin-top: 0.5em;
    margin-bottom: 1.125rem;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 3rem;
    /* or 120% */
    letter-spacing: -0.0313rem;

    color: #073233;
`

const StyledContent = styled(Row)`
    width: 29.75rem;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 150% */
    letter-spacing: 0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    padding-left: 0.9375em;
`

const Culture = () => {
    return (
        <>
        <Container>
            <StyledRow>
                <TextContainer xs={5}>
                    <StyledTitle>
                        Our Culture
                    </StyledTitle>
                    <StyledContent>
                        <Row style={{paddingLeft: "0.8333333333333334em"}}>
                        <b>At SecureKi, we believe that building the right kind of products has to start from within by hiring people from different backgrounds and empowering team members to innovate, learn together, and lead.</b>
                        <br />
                        As a company, we are constantly iterating, solving problems, and working together to build better products and create better experiences for everyone.
                        </Row>
                    </StyledContent>
                </TextContainer>
                <ImageContainer>
                    <StackedPictures />
                </ImageContainer>
            </StyledRow>
        </Container>
            
        </>
    )
}

export default Culture
