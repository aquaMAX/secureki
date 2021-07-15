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
    color: #114A4F;


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
    color: #073233;

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
    width: 0.525rem;
	height: 0.525rem;
    border-top: 1px solid #073233;
    border-right: 1px solid #073233;
    
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

    box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;
    -webkit-box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;
    -moz-box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;



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
