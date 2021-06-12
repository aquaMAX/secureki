import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import andrea from '../../assets/andrea.png'

const Container = styled.div`
    width: 22.0625em;
    height: 22.3125em;
    background: #FFFFFF;
    box-shadow: 0px 0.9375em 2.1875em rgba(0, 0, 0, 0.06);
    align-items: center;

`

const TextContainer = styled(Row)`
    /* Subtitle Text */
    font-family: Messina Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    text-align: left;
    vertical-align: top;
    /* or 156% */

    color: #5F6E70;
    margin: 0;
    padding-left: 1.7777777777777777em;
    padding-right: 1.2777777777777777em;
    padding-top: 1.8888888888888888em;
    padding-bottom: 0.5655555555555556em;
`

const ImageContainer = styled.img`
    border-radius: 50%;
    margin-left: 2.0625em;
    margin-bottom: 2.4375em;
    margin-top: 0.80125em;
    
    padding: 0;
`

const TitleContainer = styled(Row)`
    width: 8.5em;
    height: 1.5em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.5em;
    /* identical to box height, or 150% */
    margin-top: 1.36375em;
    display: flex;
    align-items: center;
    letter-spacing: 0.00625em;
    color: #FF6938;
`

const JobContainer = styled(Row)`
    width: 9.714285714285714em;
    height: 1.4285714285714286em;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875em;
    line-height: 1.4285714285714286em;
    /* identical to box height, or 143% */
    display: flex;
    align-items: center;

    color: #68737D;


`

const StoriesCard = ({story, title, position}) => {
    return (
        <Container>
                <TextContainer>
                    {story}
                </TextContainer>
            <Row style={{margin: 0}}>
                <Col xs={4} style={{padding: 0}}>
                    <ImageContainer src={andrea} />
                </Col>
                <Col>
                    <TitleContainer>
                        {title}
                    </TitleContainer>
                    <JobContainer>
                        {position}
                    </JobContainer>
                </Col>
            </Row>
            
        </Container>
    )
}

export default StoriesCard;
