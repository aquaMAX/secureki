import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import SingleOpening from './SingleOpening';

const Container = styled.div`
    height: 78.3125rem;
    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledTitle = styled(Row)`
    /* Short headline */
    padding-top: 4.5rem;
    
    min-height: 4.5rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    > h1 {
        padding-bottom: 0.25rem;
        margin: 0;
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 3.5em;
        line-height: 0.8571428571428571em;
        text-align: center;
        letter-spacing: -0.008928571428571428em;
    }
`

const Openings = () => {
    return (
        <Container>
                <StyledTitle>
                        <h1>
                        Current openings
                        </h1>
                </StyledTitle>
                <SingleOpening section="Data" />
                <SingleOpening section="Product Engineering" />
            
        </Container>
    )
}

export default Openings
