import React from 'react'
import styled from 'styled-components'

const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 25px;
    
    &:hover {
        display: block;
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
    padding: 27px 4px;
    font-size: 16px;
    border: none;
    &:hover {
        text-decoration: underline;
    }
`

const DropdownMenu = ({name}) => {
    return (
        <StyledDropdown>
           <StyledButton>{name}</StyledButton>
           <StyledLink>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </StyledLink> 
        </StyledDropdown>
        
        
    )
}

export default DropdownMenu;
