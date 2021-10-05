import React from 'react'
import styled from "styled-components"

const StyledInformation = styled.div`
    background-color: #145156;
    height: 2.8125em;
    display: flex;
    justify-content: center;
 
    > h1 {
        position: absolute;
        width: 100vw;
        height: 1.6em;
        top: 0.7333333333333333em;
        text-align: center;
        font-family: Messina Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 0.9375em;
        line-height: 1.6em;
        //letter-spacing:  0.006666666666666667em;
        color: #FFFFFF;

        > p {
            display: inline;
            font-weight: 700;
            text-underline-offset: auto;
            text-decoration: underline solid #FFFFFF;
            
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
