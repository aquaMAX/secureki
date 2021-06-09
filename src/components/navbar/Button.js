import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin-top: 1.176em;
    margin-bottom: 10px;
    margin-right: 10.5em;
    position: absolute;
    padding: 0.3937em 1.125em 0.3937em 1.125em;
    background: ${props => props.background};
    color: ${props => props.font};
    border-radius: 1.4em;
    border-width: 0px;

`


export default StyledButton;
