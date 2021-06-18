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
            transition: 0.3s;
            display: block;
        }
    }
`

const StyledLink = styled.div`
    margin-top: 0.625em;
    padding-top: 1.9375em;
    padding-bottom: 1.125em;
    padding-left: 2.125em;
        padding-right: 2.125em;
    display: none;
    position: absolute;
    background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(7, 50, 51, 0.08);
border-radius: 10px;
    min-width: 10em;
    
   
    z-index: 1;
    transition: 0.3s;
 
    > a {
        width: ${props => props.name=="Product" ? "10.3125em" : props.name=="Resources" ? "5.1875em" : "4.5em"};
        font-family: Messina Sans semibold;
        font-size: 1em;
        color: black;
        padding-bottom: 0.8125em;

        line-height: 1.3125em;
        
        
        display: block;
        transition: 0.3s;
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
    font-family: Messina Sans semibold;
    font-style: normal;
    font-weight: semibold;
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
           <StyledLink name={name} type="text">
              <a href="#">{name == "Product" ? "Multifactor Authentication  (MFA)" : name == "Resources" ? "Newsroom" : "Career"}</a>
              <a href="#">{name == "Product" ? "Privileged Access Management (PAM)" : name == "Resources" ? "Resources" : "About Us"}</a>
              {name == "Company" ? <a>Blog</a> : null}
            </StyledLink> 
        </StyledDropdown>
        
        
    )
}

export default DropdownMenu;
