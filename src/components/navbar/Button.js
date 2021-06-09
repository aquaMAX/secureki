import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 2 300px;
    margin-top: 9px;
    margin-bottom: 10px;
    position: absolute;
    padding: 0.33em 1.1em 0.33em 1.1em;
    background: ${props => props.background};
    color: ${props => props.font};
    border-radius: 1.4em;
    border-width: 0px;

`


export default StyledButton;
