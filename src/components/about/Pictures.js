import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap"
import img1 from '../../assets/about/pictures/image 11.png'
import img2 from '../../assets/about/pictures/image 12.png'
import img3 from '../../assets/about/pictures/image 13.png'

const StyledPic = styled.img`
    margin-right: 1.8125rem;
    &:last-child {
        margin-right: 0;
    }
`

const Container = styled.div`
    height: 32.9375rem;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const PicRow = styled(Row)`
    margin: 0;
    margin-left: 10.4375rem;
`

const Pictures = () => {
    return (
        <Container>
            <PicRow>
                <StyledPic src={img1} />
                <StyledPic src={img2} />
                <StyledPic src={img3} />
            </PicRow>
            
        </Container>
    )
}

export default Pictures