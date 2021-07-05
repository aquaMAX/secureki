import React from 'react'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import Job from './Job'

const Container = styled.div`
    padding-left: 10.3125rem;
    margin-top: 4.1875rem;
    height: auto;
    
`

const StyledTitle = styled(Row)`
    margin: 0;
    padding-bottom: 2.5rem;

    font-family: Messina Sans bold;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 2rem;
    letter-spacing: -0.0063rem;
    text-align: left;

`

const SingleOpening = ({section}) => {
    return (
        <Container>
            <StyledTitle>
                {section}
            </StyledTitle>
            <Job position="Developer" location="Location" />
            <Job position="Developer" location="Location" background="#FCF5F03D"/>
            <Job position="Developer" location="Location" />
            <Job position="Developer" location="Location" background="#FCF5F03D"/>
            <Job position="Developer" location="Location" />
            <Job position="Developer" location="Location" background="#FCF5F03D"/>
            <Job position="Developer" location="Location" />

        </Container>
    )
}

export default SingleOpening
