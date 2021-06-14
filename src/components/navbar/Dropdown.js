import React from 'react'
import styled from 'styled-components'
import pointer from '../../assets/logos/pointer.svg'

const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 25px;
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
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    transition: 0.3s;
 
    > a {
        color: black;
        padding: 12px 16px;
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
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 27px;
    font-size: 16px;
    border: none;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
        text-underline-offset: 2.5px;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 3px;
    }
`

const StyledPointer = styled.img`
    margin-bottom: 0;
    padding-left: 5px;
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
