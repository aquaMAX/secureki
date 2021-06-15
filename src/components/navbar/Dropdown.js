import React from 'react'
import styled from 'styled-components'
import pointer from '../../assets/logos/pointer.svg'

const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 1.5625em;
    height: 4.25em;
    transition: 0.3s;
    
    &:hover {
        display: block;
        transition: 0.3s;
        >div {
            display: block;
        }
    }
`

const StyledLink = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 10em;
    box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.2);
    z-index: 1;
    transition: 0.3s;
 
    > a {
        color: black;
        padding: 0.75 1em;
        text-decoration: none;
        display: block;
        &:hover {
            text-decoration: underline;
        }
    }
`

const StyledButton = styled.button`
    background-color: #FFFFFF;
    color: #073233;
    padding-left: 0.25em;
    padding-right: 0.25em;
    padding-top: 1.6875em;
    font-size: 1em;
    border: none;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
        text-underline-offset: 0.15625em;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 0.1875em;
    }
`

const StyledPointer = styled.img`
    margin-bottom: 0;
    padding-left: 0.3125em;
`

const DropdownMenu = ({name}) => {
    return (
        <StyledDropdown>
           <StyledButton>{name}<StyledPointer src={pointer} /></StyledButton>
           <StyledLink>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </StyledLink> 
        </StyledDropdown>
        
        
    )
}

export default DropdownMenu;
