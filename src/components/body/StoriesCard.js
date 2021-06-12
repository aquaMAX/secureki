import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Container = styled.div`
    width: 100vw;
    background: #FFFFFF;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.06);

`

const TextContainer = styled(Row)`
    /* Subtitle Text */

font-family: Messina Sans;
font-style: italic;
font-weight: normal;
font-size: 18px;
line-height: 28px;
/* or 156% */

color: #5F6E70;
`

const ImageContainer = styled.img`
    /* pexels-andrea-piacquadio-3769021 1 */

`

const TitleContainer = styled(Row)`
    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #FF6938;
`

const JobContainer = styled(Row)`
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    display: flex;
    align-items: center;

    color: #68737D;


`

export const StoriesCard = ({story, image, title, position}) => {
    return (
        <Container>
            <Row>

            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            
        </Container>
    )
}
