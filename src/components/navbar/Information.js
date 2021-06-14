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
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #FFFFFF;
        > p {
            display: inline;
            font-weight: 700;
            border-bottom: 1px solid;
        }
    }

`

const Information = () => {
    return (
        <>
        <StyledInformation>
            <h1>The automation in SecureKi can save you time and <p>double</p> your revenue. Learn more → </h1>
        </StyledInformation>
        </>
    )
}

export default Information;
