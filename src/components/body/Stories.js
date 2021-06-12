import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import StoriesCard from './StoriesCard.js'
import andrea from '../../assets/andrea.png'


const Container = styled.div`
    height: 40em;
    width: 100vw;
    background: #FFFFFF;
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 5.125em;

    > h1 {
        position: absolute;
        width: 100vw;
        font-family: Messina Sans;
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
    padding-left: 10.4375em;
    padding-right: 10.4375em;
`

export const Stories = () => {
    return (
        <Container>
            <Row style={{textAlign: "center"}}>
                <StyledTitle>
                    <h1>
                    Featured customer stories
                    </h1>
                </StyledTitle>
            </Row>
            <StyledRow>
                <Col style={{padding: 0}}>
                    <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </Col>
                <Col style={{padding: 0}}>
                <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </Col>
                <Col style={{padding: 0}}>   
                <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </Col>
            </StyledRow>
            
        </Container>
    )
}
