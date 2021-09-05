import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin-top: 1.176em;
    margin-bottom: 10px;
    position: absolute;
    padding: 0.3937em 1.125em 0.3937em 1.125em;
    background: ${props => props.background};
    color: ${props => props.font};
    border-radius: 1.9em;
    border-radius: 1.9em;
    -moz-border-radius: 1.9em;
    -webkit-border-radius: 1.9em;
    border-width: 0px;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: ${props => props.weight};
    letter-spacing: 0.1px;
    line-height: 24px;

`


export default StyledButton;
