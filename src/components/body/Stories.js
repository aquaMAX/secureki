import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import StoriesCard from './StoriesCard.js'
import andrea from '../../assets/andrea.png'
import cirbig from '../../assets/customer/cirbig.svg'
import cirsmall from '../../assets/customer/cirsmall.svg'
import rec from '../../assets/customer/rec.svg'
import recempty from '../../assets/customer/recempty.svg'


const Container = styled.div`
    height: 40em;
    
    background: #FFFFFF;
    max-width: 1440px;
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
    margin-bottom: 5.125em;

    > h1 {
        position: absolute;
      
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

const StoriesCol = styled(Col)`
    padding: 0; 
    justify-content: center; 
    display: flex;
`

const StyledRec = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 5.3125em;
    margin-top: 3.3125em;
`

const StyledSmallCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 81.0625em;
    margin-top: 34.5em;
`

const StyledCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 84.1875em;
    margin-top: 28em;
`

const StyledRecEmpty = styled.img`
    z-index: 3;
    position: absolute;
    margin-left: 78.0625em;
    margin-top: 28.9375em;
`



export const Stories = () => {
    return (
        <Container>
            <StyledRecEmpty src={recempty} />
            <StyledRec src={rec} />
            <StyledSmallCircle src={cirsmall} />
            <StyledCircle src={cirbig} />
            <Row style={{textAlign: "center", marginLeft: 0, marginRight: 0}}>
                <StyledTitle>
                    <h1>
                    Featured customer stories
                    </h1>
                </StyledTitle>
            </Row>
            <StyledRow>
                <StoriesCol>
                    <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </StoriesCol>
                <StoriesCol>
                <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </StoriesCol>
                <StoriesCol>   
                <StoriesCard 
                    story="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”"
                    image="andrea"
                    title="Jasmine Jakuza"
                    position="Solutions Engineer"
                    />
                </StoriesCol>
            </StyledRow>
            
        </Container>
    )
}
