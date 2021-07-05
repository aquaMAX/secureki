import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import drugi from "../../assets/careers/body/image 10.png"

const Container = styled.div`
    height: 31.25rem;
    
    
    

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
`
const TextContainer = styled(Col)`
    padding-left: 0;
    
    margin-left: 3.6875em;
`

const ImageContainer = styled(Col)`
    padding-top: 3.5625rem;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
`
const StyledRow = styled(Row)`
    padding-left: 1.5em;
    margin-right: 0;
    margin-left: 0;
`

const StyledSlogan = styled.div`
    padding-top: 2.6875rem;
    position: static;
    width: 21.875rem;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #A6BCB5;

    flex: none;
    order: 0;
    flex-grow: 0;
    

`

const StyledTitle = styled.div`


    vertical-align: text-top;
    width: 27.8125rem;

    font-family: Messina Sans bold;
    font-style: normal;
    
    font-size: 3.5rem;
    line-height: 3.75rem;
    /* or 107% */
    letter-spacing: -0.0625rem;

    color: #073233;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 1.5rem 0rem;

`

const StyledContent = styled.div`
    /* Separated they live */
    width: 29.6875rem;


    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* or 156% */
    color: #17494D;
    /* Inside Auto Layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 1.5rem 0px;
`


const Styledimg = styled.img`
    min-width: 36rem;
`

export const Body = () => {
    return (
  
        <Container>
            <StyledRow>

                <TextContainer>
                    <StyledSlogan>
                        CAREERS / ALL OPEN POSITIONS
                    </StyledSlogan>
                    <StyledTitle>
                        Build together, grow together                    
                    </StyledTitle>
                    <StyledContent>
                        Why SecureKi? We believe in learning by doing, and there is no better classroom than real–world experience. SecureKi employees work together in small teams that move fast and iterate to solve the problems we care the most about; securing our community from cyber threats through identity security and making an impact in the market – and we’re just getting started.                    
                    </StyledContent>
                    
                </TextContainer>
                <ImageContainer>
                    <Styledimg src={drugi} />
                </ImageContainer>


            </StyledRow>
        </Container>

    )
}