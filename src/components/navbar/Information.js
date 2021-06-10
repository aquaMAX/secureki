import React from 'react'
import styled from "styled-components"

const StyledInformation = styled.div`
    background-color: #145156;
    height: 45px;
    width: 100vw;
    display: flex;
    justify-content: center;
 
    > h1 {
        position: absolute;
        width: 100vw;
        height: 24px;
        top: 11px;
        text-align: center;
        font-family: Messina Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #FFFFFF;
    }
`

const Information = () => {
    return (
        <>
        <StyledInformation>
            <h1>The automation in SecureKi can save you time and double your revenue. Learn more → </h1>
        </StyledInformation>
        </>
    )
}

export default Information;
