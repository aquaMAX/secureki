import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const StyledRow = styled(Row)`
    margin: 0;
    height: 3rem;
    border-top: 1px outset RGB(17,74,79);
    border-top: 1px outset RGBA(17,74,79,0.11);
    background-color: ${props => props.backgroundColor};
  
    padding-top: 0.75rem;
`

const StyledPosition = styled(Col)`
    padding: 0;
    
    font-family: Messina Sans bold;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.0063rem;
    text-align: left;

`

const StyledLocation = styled(Col)`
    padding: 0;
    font-family: Messina Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.0063rem;
    text-align: left;
`

const PointerContainer = styled(Col)`
    padding: 0;
    width: 0.625rem;
    height: 0.3125rem;
`

const StyledPointer = styled.div`
    padding: 0;
    margin-top: 0.3125rem;
    /* Arrow */
    width: 0.625rem;
	height: 0.625rem;
    box-sizing: border-box;
    
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border: solid black;
    border-width: 0 3px 3px 0;


`

const Job = ({position, location, background}) => {
    return (
        <StyledRow backgroundColor={background}>
            
                <StyledPosition>
                    {position}
                </StyledPosition>
                <StyledLocation>
                    {location}
                </StyledLocation>
                <PointerContainer xs={2}>
                    <StyledPointer />
                </PointerContainer>
            
        </StyledRow>
    )
}

export default Job
