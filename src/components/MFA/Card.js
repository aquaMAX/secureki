import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import andrea from '../../assets/mfa/offer-4.png'

const Container = styled.div`
    width: 22.0625em;
    height: 22.3125em;
    background: #FFFFFF;
   
    align-items: center;
    z-index: 2;

    @media (max-width: 991px) {
        height: 26.0625rem;
    } 

`

const StyledRow = styled(Row)` 
    margin: 0;
`



const ImageContainer = styled.img`
    border-radius: 0.8125em;
    box-shadow: 7px 7px 20px rgba(7, 50, 51, 0.06);
    margin-bottom: 1.875em;
    
    padding: 0;

    width: 22.3125em;
`

const TitleContainer = styled(Row)`
    margin: 0;
    font-family: Messina Sans Bold;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;

    width: 14.583333333333334em;
    color: #FF6938;


`

const DescriptionContainer = styled(Row)`
    width: 21.875em;
    margin: 0;
    font-family: Messina Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #073233;
    margin: 1em 0;

`
const LinkContainer = styled(Row)`
    margin: 0;
    font-family: Messina Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #073233;
    text-decoration-line: underline;

`

const Card = ({title, description, link}) => {
    return (
        <Container>
            <StyledRow>
                <ImageContainer src={andrea} />
            </StyledRow>
            <TitleContainer>
                {title}
            </TitleContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
            <LinkContainer>
                {link}
            </LinkContainer>
            
        </Container>
    )
}

export default Card;