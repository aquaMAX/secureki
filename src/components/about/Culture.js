import React from 'react'
import { StackedPictures } from '../body/StackedPictures'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap"
import pictures from '../../assets/about/culture/Group 603.png'
import Media from 'react-media'

const Container = styled.div`
    height: 44.4375rem;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 45.6875rem;
    } 
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    
    padding-right: 0;
    @media (max-width: 991px) {
        padding-top: 0;
    } 

`

const ImageContainer = styled(Col)`
    padding: 0;
`
const StyledRow = styled(Row)`
    padding-left: 10.4375rem;
    
    margin-right: 0;
    margin-left: 0;
    @media (max-width: 991px) {
        padding: 0;
        
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 0;
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
    }
`

const StyledTitle = styled.div`

    
    width: 7.770833333333333em;
    
    margin-bottom: 2.8125rem;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.3rem;
    /* or 120% */
    letter-spacing: -0.0313rem;

    display: flex;
    align-items: flex-end;
    

    color: #073233;
    @media (max-width: 991px) {
        font-size: 1.875rem;
        margin-bottom: 1.5625rem;
        align-items: flex-start;
    } 
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
    @media (max-width: 991px) {
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: 0.0063rem;
        text-align: left;
        width: auto;
        margin-left: 0;
        margin-right: 1.125rem;
        padding-left: 0;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
        max-width: 29.75rem;
    }
`

const Styledimg = styled.img`
    min-width: 41.125em;
    @media (max-width: 991px) {
        max-width: 21.1875rem;
        min-width: 21.1875rem;
        margin-left: 1.125rem;
    }
`
const Wrapper = styled.div`
    max-width: 23.1375rem;
    overflow: hidden;
`

const TextRow = styled(Row)`
    padding-left: 0.8333333333333334em;
    @media (max-width: 991px) {
        
        padding: 0;
        margin: 0;
    }

`

const Culture = () => {
    return (
        <>
        <Container>
            <StyledRow xs={1} lg={2}>
                <TextContainer xs lg={5}>
                    <StyledTitle>
                        Our Culture
                    </StyledTitle>
                    <StyledContent>
                        <TextRow style={{}}>
                        <b>At SecureKi, we believe that building the right kind of products has to start from within by hiring people from different backgrounds and empowering team members to innovate, learn together, and lead.</b>
                        <br />
                        As a company, we are constantly iterating, solving problems, and working together to build better products and create better experiences for everyone.
                        </TextRow>
                    </StyledContent>
                </TextContainer>
                <ImageContainer>
                    
                    <Media queries={{
                            small: "(max-width: 991px)",
                            large: "(min-width: 992px)"
                        }}>
                            {matches => (
                                <>
                                {matches.large && <StackedPictures />}
                                {matches.small && <Wrapper><Styledimg src={pictures} /></Wrapper>} 

                                </>
                            )}
                    </Media>
                </ImageContainer>
            </StyledRow>
        </Container>
            
        </>
    )
}

export default Culture
